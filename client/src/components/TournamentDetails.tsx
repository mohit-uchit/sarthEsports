import { motion } from 'framer-motion';
import { CardWithNeon } from './ui/card-with-neon';

export default function TournamentDetails() {
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        delay: 0.2 * index,
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    })
  };
  
  // Free Fire themed animations
  const flameAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="tournament" className="py-24 relative hero-ff-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
        
        {/* Animated gradients */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-full opacity-30"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255, 87, 34, 0.2) 0%, transparent 60%)",
            backgroundSize: "150% 150%"
          }}
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Top and bottom borders */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5722] via-transparent to-[#FF5722]"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", backgroundSize: "200% 200%" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] via-transparent to-[#00E5FF]"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", backgroundSize: "200% 200%" }}
        />
        
        {/* Animated tech elements - circles */}
        <motion.div 
          className="absolute top-40 right-10 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#00E5FF" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" />
            <motion.path 
              d="M50,5 L50,95 M5,50 L95,50" 
              stroke="#00E5FF" 
              strokeWidth="1" 
              strokeDasharray="3 3"
              animate={{ 
                strokeDashoffset: [0, 100],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
        
        {/* Animated tech hexagon */}
        <motion.div 
          className="absolute bottom-40 left-10 w-40 h-40"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-15">
            <motion.path 
              d="M50,5 L90,25 L90,75 L50,95 L10,75 L10,25 Z" 
              stroke="#FF5722" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="300"
              animate={{ strokeDashoffset: [300, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle 
              cx="50" cy="50" r="20" 
              stroke="#FF5722" 
              strokeWidth="1" 
              fill="none"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Title with Free Fire styled elements */}
          <motion.div
            className="ff-section-border inline-block px-4 py-1 bg-gradient-to-r from-[#FF5722]/20 to-transparent mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h6 className="font-orbitron text-[#FF5722] text-sm uppercase tracking-widest">Tournament Details</h6>
          </motion.div>
          
          <motion.h2 
            className="font-audiowide text-4xl md:text-5xl mb-6 text-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="relative z-10">BATTLE </span>
            <motion.span 
              className="text-[#00E5FF] relative z-10"
              animate={{ 
                textShadow: ["0 0 5px rgba(0, 229, 255, 0.5)", "0 0 15px rgba(0, 229, 255, 0.8)", "0 0 5px rgba(0, 229, 255, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              SPECIFICATIONS
            </motion.span>
            
            {/* Animated line underneath */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722]"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                backgroundSize: "200% 200%"
              }}
            />
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Detail Card 1 - BERMUDA MAP */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 0 25px rgba(0, 229, 255, 0.5)",
              transition: { duration: 0.3 } 
            }}
            className="ff-battle-card"
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-[#00E5FF]/30 p-8 relative h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00E5FF]"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00E5FF]"></div>
              
              {/* Glowing top accent bar */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  backgroundSize: "200% 200%"
                }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="mb-6 text-[#00E5FF] relative"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 mx-auto bg-[#00E5FF]/10 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Map icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  
                  {/* Animated ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      border: ["1px solid rgba(0, 229, 255, 0)", "1px solid rgba(0, 229, 255, 0.7)", "1px solid rgba(0, 229, 255, 0)"],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white relative inline-block mx-auto">
                BERMUDA MAP
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00E5FF]"
                  animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </h3>
              
              <p className="text-gray-300 text-center">
                Classic Bermuda map with standard competitive settings. Prove your skills in familiar territory with high-intensity combat zones.
              </p>
              
              {/* Combat zones list */}
              <div className="mt-4 bg-black/40 p-3 rounded border border-[#00E5FF]/20">
                <h5 className="text-[#00E5FF] text-xs font-orbitron mb-2 text-center">FEATURED DROP ZONES</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-xs text-gray-300 flex items-center">
                    <motion.span 
                      className="inline-block w-2 h-2 bg-[#00E5FF] mr-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Peak
                  </div>
                  <div className="text-xs text-gray-300 flex items-center">
                    <motion.span 
                      className="inline-block w-2 h-2 bg-[#00E5FF] mr-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    />
                    Factory
                  </div>
                  <div className="text-xs text-gray-300 flex items-center">
                    <motion.span 
                      className="inline-block w-2 h-2 bg-[#00E5FF] mr-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    />
                    Clock Tower
                  </div>
                  <div className="text-xs text-gray-300 flex items-center">
                    <motion.span 
                      className="inline-block w-2 h-2 bg-[#00E5FF] mr-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                    />
                    Mill
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Detail Card 2 - SOLO MODE */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 0 25px rgba(255, 87, 34, 0.5)",
              transition: { duration: 0.3 }
            }}
            className="ff-battle-card"
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-[#FF5722]/30 p-8 relative h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#FF5722]"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#FF5722]"></div>
              
              {/* Glowing top accent bar */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  backgroundSize: "200% 200%" 
                }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="mb-6 text-[#FF5722] relative"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-20 h-20 mx-auto bg-[#FF5722]/10 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Solo player icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  
                  {/* Animated ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      border: ["1px solid rgba(255, 87, 34, 0)", "1px solid rgba(255, 87, 34, 0.7)", "1px solid rgba(255, 87, 34, 0)"],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white relative inline-block mx-auto">
                SOLO MODE
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#FF5722]"
                  animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </h3>
              
              <p className="text-gray-300 text-center">
                Every player for themselves. No teams, no help - just pure skill, strategy and survival. Last player standing wins it all.
              </p>
              
              {/* Stats bars */}
              <div className="mt-4 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">WEAPON TIER</span>
                    <span className="text-[#FF5722]">UNRESTRICTED</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF8A65]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">MATCH DURATION</span>
                    <span className="text-[#FF5722]">15-20 MINS</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF8A65]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.4 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">DIFFICULTY</span>
                    <span className="text-[#FF5722]">EXPERT</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF8A65]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.6 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Detail Card 3 - PRIZES */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 0 25px rgba(0, 229, 255, 0.5)",
              transition: { duration: 0.3 }
            }}
            className="ff-battle-card"
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-[#00E5FF]/30 p-8 relative h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00E5FF]"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00E5FF]"></div>
              
              {/* Glowing top accent bar */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  backgroundSize: "200% 200%" 
                }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="mb-6 text-[#00E5FF] relative"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-20 h-20 mx-auto bg-[#00E5FF]/10 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Trophy icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M12 2v7"></path>
                    <path d="m18 9-6 5-6-5"></path>
                  </svg>
                  
                  {/* Animated sparkle effect */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ 
                      background: [
                        "radial-gradient(circle at 30% 30%, rgba(0, 229, 255, 0.5) 0%, transparent 30%)",
                        "radial-gradient(circle at 70% 70%, rgba(0, 229, 255, 0.5) 0%, transparent 30%)",
                        "radial-gradient(circle at 30% 30%, rgba(0, 229, 255, 0.5) 0%, transparent 30%)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white relative inline-block mx-auto">
                PRIZES
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00E5FF]"
                  animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </h3>
              
              <p className="text-gray-300 text-center mb-4">
                Exclusive in-game rewards, diamonds, cash prizes and recognition in the Sarth Esports community.
              </p>
              
              {/* Prize list with animated badges */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-orbitron text-sm">1ST PLACE</span>
                  <div className="ff-badge">
                    <span>₹5,000</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white font-orbitron text-sm">2ND PLACE</span>
                  <div className="ff-badge">
                    <span>₹2,000</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white font-orbitron text-sm">3RD PLACE</span>
                  <div className="ff-badge">
                    <span>₹1,000</span>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <motion.div 
                    className="inline-block text-xs text-gray-300 border border-[#00E5FF]/30 px-2 py-1 rounded"
                    animate={{ 
                      boxShadow: ["0 0 5px rgba(0, 229, 255, 0)", "0 0 10px rgba(0, 229, 255, 0.3)", "0 0 5px rgba(0, 229, 255, 0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    + EXCLUSIVE IN-GAME ITEMS
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Tournament schedule - Free Fire styled */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="ff-section-border bg-black/80 backdrop-blur-md rounded-lg p-8 relative overflow-hidden">
            {/* Top glowing border animation is handled by ff-section-border */}
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M170,100 A70,70 0 1,1 30,100 A70,70 0 1,1 170,100 Z" 
                  stroke="#FF5722" 
                  strokeWidth="1" 
                  fill="none"
                  strokeDasharray="440"
                  animate={{ strokeDashoffset: [440, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.path 
                  d="M150,100 A50,50 0 1,1 50,100 A50,50 0 1,1 150,100 Z" 
                  stroke="#FF5722" 
                  strokeWidth="1" 
                  fill="none"
                  strokeDasharray="314"
                  animate={{ strokeDashoffset: [0, 314] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
            
            {/* Title with glitch effect */}
            <div className="text-center mb-10 relative">
              <h3 className="ff-glitch-text font-audiowide text-3xl text-white relative inline-block" data-text="TOURNAMENT SCHEDULE">
                TOURNAMENT <span className="text-[#FF5722]">SCHEDULE</span>
              </h3>
              <motion.div 
                className="h-0.5 w-48 bg-gradient-to-r from-[#FF5722] via-white to-[#00E5FF] mx-auto mt-2"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  backgroundSize: "200% 200%" 
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Schedule Item 1 - REGISTRATION */}
              <motion.div 
                className="ff-battle-card relative overflow-hidden"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 20px rgba(255, 87, 34, 0.3)",
                  transition: { duration: 0.2 } 
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative p-6 z-10">
                  {/* Number indicator */}
                  <div className="absolute -top-4 -left-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-[#FF5722] flex items-center justify-center text-black font-bold"
                      animate={{ 
                        boxShadow: ["0 0 5px rgba(255, 87, 34, 0.7)", "0 0 15px rgba(255, 87, 34, 0.9)", "0 0 5px rgba(255, 87, 34, 0.7)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      1
                    </motion.div>
                  </div>
                  
                  <h4 className="font-orbitron text-lg mb-3 text-[#FF5722]">REGISTRATION</h4>
                  <p className="text-gray-300 mb-3 font-rajdhani">March 28 - April 15, 2025</p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FF5722]/20 rounded-full border border-[#FF5722]/40">
                    <motion.span 
                      className="inline-block w-2 h-2 bg-green-500 rounded-full"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-white text-sm">Open Now</span>
                  </div>
                </div>
                
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-12 h-12 opacity-50"
                  animate={{ rotate: 180, opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L48,0 L48,48 Z" fill="#FF5722" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Schedule Item 2 - QUALIFIERS */}
              <motion.div 
                className="ff-battle-card relative overflow-hidden"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 20px rgba(0, 229, 255, 0.3)",
                  transition: { duration: 0.2 } 
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative p-6 z-10">
                  {/* Number indicator */}
                  <div className="absolute -top-4 -left-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-[#00E5FF] flex items-center justify-center text-black font-bold"
                      animate={{ 
                        boxShadow: ["0 0 5px rgba(0, 229, 255, 0.7)", "0 0 15px rgba(0, 229, 255, 0.9)", "0 0 5px rgba(0, 229, 255, 0.7)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      2
                    </motion.div>
                  </div>
                  
                  <h4 className="font-orbitron text-lg mb-3 text-[#00E5FF]">QUALIFIERS</h4>
                  <p className="text-gray-300 mb-3 font-rajdhani">April 20, 2025</p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/20">
                    <span className="text-white text-sm">Coming Soon</span>
                  </div>
                </div>
                
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-12 h-12 opacity-50"
                  animate={{ rotate: 180, opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48,48 L0,48 L0,0 Z" fill="#00E5FF" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Schedule Item 3 - FINALS */}
              <motion.div 
                className="ff-battle-card relative overflow-hidden"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 20px rgba(255, 87, 34, 0.3)",
                  transition: { duration: 0.2 } 
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative p-6 z-10">
                  {/* Number indicator */}
                  <div className="absolute -top-4 -left-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-[#FF5722] flex items-center justify-center text-black font-bold"
                      animate={{ 
                        boxShadow: ["0 0 5px rgba(255, 87, 34, 0.7)", "0 0 15px rgba(255, 87, 34, 0.9)", "0 0 5px rgba(255, 87, 34, 0.7)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      3
                    </motion.div>
                  </div>
                  
                  <h4 className="font-orbitron text-lg mb-3 text-[#FF5722]">FINALS</h4>
                  <p className="text-gray-300 mb-3 font-rajdhani">April 25, 2025</p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FF5722]/10 rounded-full border border-[#FF5722]/20">
                    <span className="text-white text-sm">Coming Soon</span>
                  </div>
                </div>
                
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-12 h-12 opacity-50"
                  animate={{ rotate: 180, opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L48,0 L48,48 Z" fill="#FF5722" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Rules summary with Free Fire styling */}
            <motion.div 
              className="mt-10 bg-black/60 p-6 rounded-lg border border-[#FF5722]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h4 className="font-orbitron text-white mb-4 flex items-center">
                <motion.div
                  animate={{ 
                    color: ["#FF5722", "#FFCCBC", "#FF5722"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </motion.div>
                IMPORTANT RULES
              </h4>
              
              <ul className="space-y-3 text-sm">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.span 
                    className="text-[#00E5FF] mr-2 text-xl"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    •
                  </motion.span>
                  <span className="text-gray-300">
                    Players must have a stable internet connection and the latest version of Free Fire.
                  </span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.span 
                    className="text-[#00E5FF] mr-2 text-xl"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  >
                    •
                  </motion.span>
                  <span className="text-gray-300">
                    No emulators allowed. Mobile devices only.
                  </span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.span 
                    className="text-[#00E5FF] mr-2 text-xl"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  >
                    •
                  </motion.span>
                  <span className="text-gray-300">
                    Any form of cheating will result in immediate disqualification.
                  </span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.span 
                    className="text-[#00E5FF] mr-2 text-xl"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  >
                    •
                  </motion.span>
                  <span className="text-gray-300">
                    Players must join the tournament lobby 15 minutes before the scheduled start.
                  </span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <motion.span 
                    className="text-[#00E5FF] mr-2 text-xl"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                  >
                    •
                  </motion.span>
                  <span className="text-gray-300">
                    Tournament officials' decisions are final on all matters.
                  </span>
                </motion.li>
              </ul>
              
              {/* CTA Button */}
              <motion.a
                href="#registration"
                className="ff-button flex items-center justify-center mt-6 mx-auto"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(255, 87, 34, 0.6)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <span>REGISTER NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
