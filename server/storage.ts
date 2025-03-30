import { players, type Player, type InsertPlayer } from '@shared/schema';
import fs from 'fs';
import path from 'path';

// Storage interface with CRUD methods for player management
export interface IStorage {
  registerPlayer(player: InsertPlayer): Promise<Player>;
  getPlayerById(id: number): Promise<Player | undefined>;
  getPlayerByUID(uid: string): Promise<Player | undefined>;
  getPlayerByEmail(email: string): Promise<Player | undefined>;
  getAllPlayers(): Promise<Player[]>;
  getRegisteredPlayersCount(): Promise<number>;
  getMaxPlayers(): number;
}

export class FileStorage implements IStorage {
  private players: Map<number, Player>;
  private currentId: number;
  private maxPlayers: number = 48; // Tournament limited to 48 players
  private filePath: string;

  constructor() {
    this.players = new Map();
    this.currentId = 1;
    this.filePath = path.join(process.cwd(), 'data', 'players.json');

    // Load players when the instance is created
    this.loadPlayersFromFile();
  }

  private loadPlayersFromFile() {
    if (fs.existsSync(this.filePath)) {
      try {
        const data = fs.readFileSync(this.filePath, 'utf8');
        const playersArray: any[] = JSON.parse(data);
        
        // Clear the current map
        this.players.clear();
        
        // Filter out invalid entries and normalize data format
        const validPlayers = playersArray.filter(p => 
          p.id !== undefined && 
          ((p.fullName || p.playerName) && 
          (p.uid) && 
          (p.email || p.id === 1)) // Special case for the first legacy entry
        );
        
        // Assign unique IDs
        let maxId = 0;
        validPlayers.forEach(player => {
          // Create normalized player object
          const normalizedPlayer: Player = {
            id: player.id,
            fullName: player.fullName || player.playerName || "",
            inGameName: player.inGameName || "",
            uid: player.uid,
            email: player.email || `legacy${player.id}@example.com`,
            phone: player.phone || "",
            registeredAt: player.registeredAt || new Date().toISOString(),
            agreement: player.agreement || player.rulesAgreement || false
          };
          
          this.players.set(normalizedPlayer.id, normalizedPlayer);
          maxId = Math.max(maxId, normalizedPlayer.id);
        });
        
        this.currentId = maxId + 1;
        console.log('Loaded players from file:', this.players.size);
      } catch (error) {
        console.error('Error loading players from file:', error);
        // Create empty file if there was an error parsing
        this.savePlayersToFile();
      }
    } else {
      // Ensure the data directory exists
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      // Create empty file
      this.savePlayersToFile();
    }
  }

  private savePlayersToFile() {
    try {
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      const playersArray = Array.from(this.players.values());
      fs.writeFileSync(this.filePath, JSON.stringify(playersArray, null, 2));
      console.log('Players saved to file. Total players:', playersArray.length);
    } catch (error) {
      console.error('Error saving players to file:', error);
    }
  }

  async registerPlayer(insertPlayer: InsertPlayer): Promise<Player> {
    // Always reload from file first to ensure we have the latest data
    this.loadPlayersFromFile();
    
    if (await this.getRegisteredPlayersCount() >= this.maxPlayers) {
      throw new Error('Tournament registration is full');
    }

    const existingPlayerUID = await this.getPlayerByUID(insertPlayer.uid);
    if (existingPlayerUID) {
      throw new Error('A player with this UID is already registered');
    }

    const existingPlayerEmail = await this.getPlayerByEmail(insertPlayer.email);
    if (existingPlayerEmail) {
      throw new Error('A player with this email is already registered');
    }

    const id = this.currentId++;
    const player: Player = {
      ...insertPlayer,
      id,
      registeredAt: new Date().toISOString(),
    };

    this.players.set(id, player);
    this.savePlayersToFile();

    return player;
  }

  async getPlayerById(id: number): Promise<Player | undefined> {
    // Reload from file to ensure fresh data
    this.loadPlayersFromFile();
    return this.players.get(id);
  }

  async getPlayerByUID(uid: string): Promise<Player | undefined> {
    // Reload from file to ensure fresh data
    this.loadPlayersFromFile();
    return Array.from(this.players.values()).find(player => player.uid === uid);
  }

  async getPlayerByEmail(email: string): Promise<Player | undefined> {
    // Reload from file to ensure fresh data
    this.loadPlayersFromFile();
    return Array.from(this.players.values()).find(
      player => player.email.toLowerCase() === email.toLowerCase()
    );
  }

  async getAllPlayers(): Promise<Player[]> {
    // Reload from file to ensure fresh data
    this.loadPlayersFromFile();
    return Array.from(this.players.values());
  }

  async getRegisteredPlayersCount(): Promise<number> {
    // Reload from file to ensure fresh data
    this.loadPlayersFromFile();
    return this.players.size;
  }

  getMaxPlayers(): number {
    return this.maxPlayers;
  }
  
  // Method to normalize existing data
  async normalizeExistingData(): Promise<void> {
    if (fs.existsSync(this.filePath)) {
      try {
        const data = fs.readFileSync(this.filePath, 'utf8');
        const playersArray: any[] = JSON.parse(data);
        
        // Clear the current map
        this.players.clear();
        
        // Filter out invalid entries and normalize data format
        const validPlayers = playersArray.filter(p => 
          ((p.fullName || p.playerName) && 
          (p.uid) && 
          (p.email || p.id === 1))
        );
        
        // Re-assign sequential IDs
        validPlayers.forEach((player, index) => {
          const id = index + 1;
          // Create normalized player object
          const normalizedPlayer: Player = {
            id: id,
            fullName: player.fullName || player.playerName || "",
            inGameName: player.inGameName || "",
            uid: player.uid,
            email: player.email || `legacy${id}@example.com`,
            phone: player.phone || "",
            registeredAt: player.registeredAt || new Date().toISOString(),
            agreement: player.agreement || player.rulesAgreement || false
          };
          
          this.players.set(id, normalizedPlayer);
        });
        
        this.currentId = validPlayers.length + 1;
        
        // Save the normalized data back to file
        this.savePlayersToFile();
        
        console.log('Data normalized successfully');
      } catch (error) {
        console.error('Error normalizing data:', error);
      }
    }
  }
}

// Create and export the storage instance
export const storage = new FileStorage();