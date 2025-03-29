import { Player } from "../../../shared/schema";

export type PlayerWithRegistrationId = Player & {
  registrationId: string;
};

export interface RegistrationFormData {
  fullName: string;
  inGameName: string;
  uid: string;
  email: string;
  phone: string;
  agreement: boolean;
}

export interface RegistrationResponse {
  message: string;
  player: Player;
  emailSent: boolean;
}

export interface TournamentStatus {
  registeredCount: number;
  maxPlayers: number;
  availableSlots: number;
  isFull: boolean;
}

export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: PlayerWithRegistrationId | null;
}

export type NavItem = {
  label: string;
  href: string;
};

export type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
};

export type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export type PlacementPoint = {
  label: string;
  points: number;
};

export type KillPoint = {
  label: string;
  points: number;
};

export type TournamentPrize = {
  position: string;
  rewards: string[];
  badges: string[];
  color: string;
  iconClass: string;
};

export type BracketStage = {
  number: number;
  title: string;
  playerCount: number;
  matchCount: number;
  advanceText: string;
};

export type StreamPlatform = {
  name: string;
  url: string;
  icon: string;
  colorFrom: string;
  colorTo: string;
  timing: string;
};

export type StreamSchedule = {
  name: string;
  timing: string;
};