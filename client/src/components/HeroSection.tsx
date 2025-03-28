import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        
        {/* Animated particles/effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-game-blue opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-game-accent opacity-10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.08, 0.12],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Diagonal accents */}
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-game-accent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-game-blue via-transparent to-game-blue opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text Column */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-game-blue/20 to-transparent px-6 py-2 border-l-4 border-game-blue"
            >
              <h5 className="font-orbitron text-game-blue font-bold">SARTH ESPORTS PRESENTS</h5>
            </motion.div>
            
            <div className="space-y-2">
              <motion.h1 
                className="font-audiowide text-5xl md:text-7xl text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                FREE FIRE
              </motion.h1>
              
              <motion.h2 
                className="font-audiowide text-5xl md:text-7xl text-game-accent bg-clip-text text-transparent bg-gradient-to-r from-game-accent via-red-500 to-game-accent leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                SOLO BERMUDA
              </motion.h2>
              
              <motion.h2 
                className="font-audiowide text-4xl md:text-6xl text-game-blue leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                TOURNAMENT
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Battle it out in the ultimate Free Fire tournament! Showcase your skills, compete against the best, and win exclusive rewards.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a 
                href="#registration" 
                className="relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 group-hover:from-red-500 group-hover:to-orange-400 transition-all duration-300"></span>
                <span className="relative block font-orbitron text-white font-bold tracking-wider uppercase px-8 py-4 border-2 border-transparent">
                  Register Now
                </span>
              </motion.a>
              
              <motion.a 
                href="#tournament" 
                className="relative overflow-hidden group bg-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-transparent border-2 border-game-blue group-hover:border-opacity-80 transition-all duration-300"></span>
                <span className="relative block font-orbitron text-game-blue group-hover:text-white font-bold tracking-wider uppercase px-8 py-4 group-hover:bg-game-blue/20 transition-all duration-300">
                  Tournament Details
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Hero Character Column */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Character glow background */}
              <div className="absolute inset-0 bg-gradient-radial from-game-accent/20 via-transparent to-transparent rounded-full blur-xl"></div>
              
              {/* Main character SVG with better design */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full"
              >
                <svg viewBox="0 0 400 600" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="body-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#000000" />
                      <stop offset="50%" stopColor="#222222" />
                      <stop offset="100%" stopColor="#111111" />
                    </linearGradient>
                    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="100%" stopColor="#0099CC" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Body */}
                  <path d="M200,80 C300,100 320,200 320,300 C320,450 250,520 200,550 C150,520 80,450 80,300 C80,200 100,100 200,80" 
                    fill="url(#body-gradient)" />
                  
                  {/* Helmet */}
                  <path d="M200,100 C240,110 270,140 270,180 C270,220 240,260 200,260 C160,260 130,220 130,180 C130,140 160,110 200,100" 
                    fill="#222" stroke="#333" strokeWidth="2" />
                  
                  {/* Visor */}
                  <path d="M170,160 L230,160 L220,220 L180,220 Z" 
                    fill="url(#accent-gradient)" filter="url(#glow)" />
                  
                  {/* Gun */}
                  <path d="M320,280 L350,260 L370,280 L370,300 L340,310 L320,300 Z" 
                    fill="#333" stroke="#444" strokeWidth="1" />
                  
                  {/* Arms */}
                  <path d="M150,220 C130,240 110,300 100,350 M250,220 C270,240 290,300 300,350" 
                    stroke="#222" strokeWidth="40" strokeLinecap="round" />
                  
                  {/* Accent lines */}
                  <path d="M180,280 L220,280 L210,450 L190,450 Z" 
                    fill="url(#accent-gradient)" fillOpacity="0.3" />
                  
                  <path d="M140,200 L120,300 L110,380 M260,200 L280,300 L290,380" 
                    stroke="url(#accent-gradient)" strokeWidth="3" strokeOpacity="0.8" fill="none" />
                </svg>
              </motion.div>
              
              {/* Decorative tech elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#FF5722" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#FF5722" strokeWidth="1" strokeOpacity="0.6" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
