import { Link } from "wouter";
import { motion } from "framer-motion";
import logoPath from "../assets/logo.jpeg";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/80 backdrop-blur-sm sticky top-0 py-4 px-4 md:px-8 z-50 border-b border-game-accent/20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-16 w-16 mr-3 overflow-hidden rounded-lg border-2 border-game-accent"
          >
            <img src={logoPath} alt="Sarth Esports Logo" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <h1 className="font-audiowide text-2xl text-game-blue">SARTH <span className="text-game-accent">ESPORTS</span></h1>
            <p className="text-xs text-game-text-dim">FREE FIRE TOURNAMENT</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center flex-wrap justify-center gap-x-8 gap-y-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <Link href="/" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition-colors cursor-pointer">
              Home
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <Link href="#" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition-colors cursor-pointer">
              Tournaments
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <Link href="#" className="font-orbitron text-sm uppercase tracking-wider hover:text-game-accent transition-colors cursor-pointer">
              Leaderboard
            </Link>
          </motion.div>
          <motion.a 
            href="#registration"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-orbitron text-sm uppercase bg-gradient-to-r from-game-accent to-red-700 hover:from-red-600 hover:to-game-accent 
            text-white px-6 py-2 rounded tracking-wider transition-all shadow-lg shadow-game-accent/30"
          >
            Register Now
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
