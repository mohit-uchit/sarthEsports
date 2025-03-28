import { players, type Player, type InsertPlayer } from "@shared/schema";

// Storage interface with CRUD methods for player management
export interface IStorage {
  registerPlayer(player: InsertPlayer): Promise<Player>;
  getPlayerById(id: number): Promise<Player | undefined>;
  getPlayerByUID(uid: string): Promise<Player | undefined>;
  getAllPlayers(): Promise<Player[]>;
}

export class MemStorage implements IStorage {
  private players: Map<number, Player>;
  private currentId: number;

  constructor() {
    this.players = new Map();
    this.currentId = 1;
  }

  async registerPlayer(insertPlayer: InsertPlayer): Promise<Player> {
    // Check if player with same UID already exists
    const existingPlayer = Array.from(this.players.values()).find(
      (player) => player.uid === insertPlayer.uid
    );

    if (existingPlayer) {
      throw new Error("A player with this UID is already registered");
    }

    const id = this.currentId++;
    const player: Player = { ...insertPlayer, id };
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

  async getAllPlayers(): Promise<Player[]> {
    return Array.from(this.players.values());
  }
}

// Create and export the storage instance
export const storage = new MemStorage();
