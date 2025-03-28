import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Cyber grid background */}
      <div className="cyber-grid absolute inset-0 opacity-30"></div>
      
      {/* Diagonal slash decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-game-accent opacity-20 transform -skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-game-blue opacity-20 transform skew-x-12"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <motion.div 
            className="digital-distortion"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="font-orbitron text-game-accent mb-2">SARTH ESPORTS PRESENTS</h5>
            <h1 className="font-audiowide text-4xl md:text-6xl mb-4 leading-tight">
              <span className="text-white">FREE FIRE</span>
              <span className="block text-game-blue">SOLO BERMUDA</span>
              <span className="block">TOURNAMENT</span>
            </h1>
            <p className="text-game-text-dim mb-8 max-w-lg">
              Battle it out in the ultimate Free Fire tournament! Register now to showcase your skills, compete against the best, and win exclusive rewards.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#registration" className="bg-game-accent hover:bg-game-accent-hover px-6 py-3 font-orbitron rounded-sm text-black text-sm uppercase tracking-wider transition">
                Register Now
              </a>
              <a href="#" className="border border-game-blue text-game-blue hover:bg-game-blue-dim px-6 py-3 font-orbitron rounded-sm text-sm uppercase tracking-wider transition">
                View Details
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <div className="relative">
            {/* Character image */}
            <motion.div 
              className="absolute right-0 bottom-0 w-4/5 h-4/5"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              {/* SVG Character Silhouette - Replacing mock image with an SVG */}
              <svg viewBox="0 0 400 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="silhouette-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF5722" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M200,50 C300,100 350,200 350,300 C350,500 250,550 200,575 C150,550 50,500 50,300 C50,200 100,100 200,50" 
                  fill="url(#silhouette-gradient)" opacity="0.8" />
                <path d="M190,180 C210,180 230,200 230,220 C230,240 210,280 190,280 C170,280 150,240 150,220 C150,200 170,180 190,180" 
                  fill="#00E5FF" opacity="0.8" />
                <path d="M150,300 L250,300 L220,500 L180,500 Z" 
                  fill="#00E5FF" fillOpacity="0.5" />
                <path d="M140,220 L120,350 L100,400 M260,220 L280,350 L300,400" 
                  stroke="#00E5FF" strokeWidth="8" strokeOpacity="0.6" fill="none" />
              </svg>
              
              {/* Glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-game-blue-dim to-transparent opacity-50"></div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-8 h-8 border-l-2 border-t-2 border-game-blue opacity-60"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-16 bg-game-accent opacity-30 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
