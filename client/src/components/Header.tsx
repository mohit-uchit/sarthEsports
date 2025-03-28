import { Link } from "wouter";

export default function Header() {
  return (
    <header className="container mx-auto py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
      {/* Logo placeholder */}
      <div className="w-24 h-24 bg-game-dark-alt mb-4 md:mb-0 rounded-md overflow-hidden relative neon-border flex items-center justify-center">
        <div className="absolute inset-0 bg-game-blue-dim opacity-20"></div>
        <span className="font-audiowide text-game-blue text-xl">LOGO</span>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-6">
        <Link href="/" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition">
          Home
        </Link>
        <Link href="#" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition">
          Tournaments
        </Link>
        <Link href="#" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition">
          Leaderboard
        </Link>
        <Link href="#" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition">
          About
        </Link>
        <a href="#registration" className="font-orbitron text-sm uppercase bg-game-accent hover:bg-game-accent-hover px-4 py-2 rounded-sm tracking-wider transition">
          Register Now
        </a>
      </nav>
    </header>
  );
}
