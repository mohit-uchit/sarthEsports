import { players, type Player, type InsertPlayer } from "@shared/schema";

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

export class MemStorage implements IStorage {
  private players: Map<number, Player>;
  private currentId: number;
  private maxPlayers: number = 48; // Tournament limited to 48 players

  constructor() {
    this.players = new Map();
    this.currentId = 1;
  }

  async registerPlayer(insertPlayer: InsertPlayer): Promise<Player> {
    // Check if tournament is full
    if (this.players.size >= this.maxPlayers) {
      throw new Error("Tournament registration is full");
    }

    // Check if player with same UID already exists
    const existingPlayerUID = Array.from(this.players.values()).find(
      (player) => player.uid === insertPlayer.uid
    );

    if (existingPlayerUID) {
      throw new Error("A player with this UID is already registered");
    }

    // Check if player with same email already exists
    const existingPlayerEmail = Array.from(this.players.values()).find(
      (player) => player.email === insertPlayer.email
    );

    if (existingPlayerEmail) {
      throw new Error("A player with this email is already registered");
    }

    const id = this.currentId++;
    const player: Player = { 
      ...insertPlayer, 
      id,
      registeredAt: new Date().toISOString() 
    };
    
    this.players.set(id, player);
    return player;
  }

  async getPlayerById(id: number): Promise<Player | undefined> {
    return this.players.get(id);
  }

  async getPlayerByUID(uid: string): Promise<Player | undefined> {
    return Array.from(this.players.values()).find(
      (player) => player.uid === uid
    );
  }

  async getPlayerByEmail(email: string): Promise<Player | undefined> {
    return Array.from(this.players.values()).find(
      (player) => player.email === email
    );
  }

  async getAllPlayers(): Promise<Player[]> {
    return Array.from(this.players.values());
  }

  async getRegisteredPlayersCount(): Promise<number> {
    return this.players.size;
  }

  getMaxPlayers(): number {
    return this.maxPlayers;
  }
}

// Create and export the storage instance
export const storage = new MemStorage();
