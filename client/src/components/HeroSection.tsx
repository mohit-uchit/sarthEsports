import { motion } from "framer-motion";
import AlokModel3D from "./AlokModel3D";

export default function HeroSection() {
  return (
    <section className="hero-ff-background relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
        
        {/* Fire animated gradients */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255, 87, 34, 0.3) 0%, transparent 50%)",
            backgroundSize: "150% 150%"
          }}
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Blue animated gradients */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(0, 229, 255, 0.3) 0%, transparent 50%)",
            backgroundSize: "150% 150%"
          }}
          animate={{ 
            backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        {/* Scan Lines Effect */}
        <div className="absolute inset-0 bg-repeat opacity-5" 
          style={{ 
            backgroundImage: "linear-gradient(transparent 50%, rgba(255,255,255,.05) 50%)", 
            backgroundSize: "4px 4px"
          }}>
        </div>
        
        {/* Combat Zone Effect */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1/4"
          style={{
            background: "linear-gradient(to top, rgba(255, 87, 34, 0.2), transparent)"
          }}
          animate={{ 
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top Border Effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5722] via-transparent to-[#FF5722]"
          animate={{
            opacity: [0.8, 0.4, 0.8],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", backgroundSize: "200% 200%" }}
        />
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Diamonds - Top Right */}
        <motion.div
          className="absolute top-[15%] right-[10%]"
          animate={{ rotate: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect 
              x="30" y="0" width="42" height="42" transform="rotate(45 30 30)" 
              stroke="#FF5722" strokeWidth="1"
              strokeDasharray="60 60"
              animate={{ strokeDashoffset: [60, 0, 60] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Floating Hex - Bottom Left */}
        <motion.div
          className="absolute bottom-[20%] left-[15%]"
          animate={{ rotate: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M35 0 L70 17.5 L70 52.5 L35 70 L0 52.5 L0 17.5 Z" 
              stroke="#00E5FF" strokeWidth="1"
              strokeDasharray="220 220"
              animate={{ strokeDashoffset: [220, 0, 220] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              fill="none"
            />
          </svg>
        </motion.div>
        
        {/* Floating Combat Icon - Top Left */}
        <motion.div
          className="absolute top-[25%] left-[20%]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z" fill="#FF5722" fillOpacity="0.1" />
            <path d="M20 5 L35 13 L35 27 L20 35 L5 27 L5 13 Z" stroke="#FF5722" strokeOpacity="0.5" strokeWidth="1" fill="none" />
            <circle cx="20" cy="20" r="5" stroke="#FF5722" strokeOpacity="0.8" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
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
              className="inline-block bg-gradient-to-r from-[#00E5FF]/10 to-transparent px-6 py-2 border-l-4 border-[#00E5FF]"
            >
              <h5 className="font-orbitron text-[#00E5FF] font-bold tracking-wider">SARTH ESPORTS PRESENTS</h5>
            </motion.div>
            
            <div className="space-y-4">
              {/* FREE FIRE Title with fire animation */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h1 className="font-audiowide text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                  FREE FIRE
                </h1>
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722]"
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
                {/* Fire effect overlay */}
                <motion.div 
                  className="absolute -bottom-8 left-0 right-0 h-8 opacity-70"
                  style={{
                    background: "linear-gradient(to top, rgba(255, 87, 34, 0), rgba(255, 87, 34, 0.2))"
                  }}
                  animate={{ 
                    height: ["8px", "16px", "8px"],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* SOLO BERMUDA with glitch effect */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="ff-glitch-text font-audiowide text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#FF5722] leading-tight" data-text="SOLO BERMUDA">
                  SOLO BERMUDA
                </h2>
                <motion.div
                  className="absolute inset-0 w-full h-full" 
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    opacity: [0, 0.3, 0] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    backgroundImage: "linear-gradient(45deg, rgba(255, 87, 34, 0.2), transparent 60%)",
                    backgroundSize: "200% 200%"
                  }}
                />
              </motion.div>
              
              <motion.h2 
                className="font-audiowide text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00E5FF] leading-tight relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                TOURNAMENT
                <motion.span 
                  className="absolute -right-3 sm:-right-4 top-0 text-sm sm:text-lg text-[#00E5FF]"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ★
                </motion.span>
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl font-rajdhani"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Battle it out in the ultimate Free Fire tournament! Showcase your skills on the Bermuda map, compete against the best, and win exclusive rewards and recognition.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a 
                href="#registration" 
                className="ff-button relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 87, 34, 0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative block font-orbitron text-white font-bold tracking-wider uppercase px-8 py-4 z-10">
                  Register Now
                </span>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-[#FF5722]/20 z-0"
                  animate={{ 
                    background: ["linear-gradient(45deg, rgba(255, 87, 34, 0.4) 0%, rgba(255, 87, 34, 0) 100%)", 
                                "linear-gradient(45deg, rgba(255, 87, 34, 0) 0%, rgba(255, 87, 34, 0.4) 100%)",
                                "linear-gradient(45deg, rgba(255, 87, 34, 0.4) 0%, rgba(255, 87, 34, 0) 100%)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.a>
              
              <motion.a 
                href="#tournament" 
                className="relative overflow-hidden group bg-transparent z-10"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-transparent border-2 border-[#00E5FF]/70 transition-all duration-300"></span>
                <span className="relative block font-orbitron text-[#00E5FF] group-hover:text-white font-bold tracking-wider uppercase px-8 py-4 group-hover:bg-[#00E5FF]/20 transition-all duration-300">
                  Tournament Details
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#00E5FF]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
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
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "radial-gradient(circle at center, rgba(255, 87, 34, 0.3) 0%, transparent 70%)",
                    "radial-gradient(circle at center, rgba(255, 87, 34, 0.5) 0%, transparent 70%)",
                    "radial-gradient(circle at center, rgba(255, 87, 34, 0.3) 0%, transparent 70%)"
                  ],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Interactive 3D Alok character model */}
              <div className="h-full w-full">
                <AlokModel3D />
              </div>
              
              {/* Floating rotation circles */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#FF5722" strokeWidth="1" strokeDasharray="6 6" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#FF5722" strokeWidth="1" strokeOpacity="0.5" />
                  <motion.circle 
                    cx="50" cy="5" r="3" 
                    fill="#FF5722"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
              
              {/* Counter-rotation for layered effect */}
              <motion.div 
                className="absolute -bottom-5 -left-5 w-32 h-32"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 8" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3" />
                  <motion.circle 
                    cx="50" cy="5" r="2" 
                    fill="#00E5FF"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
              
              {/* Stats indicators */}
              <motion.div
                className="absolute -right-4 top-1/3 flex flex-col gap-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <div className="ff-badge">POWER</div>
                <div className="h-1.5 w-24 bg-[#222222] overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF8A65]" 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, delay: 2 }}
                  />
                </div>
                
                <div className="ff-badge mt-2">SPEED</div>
                <div className="h-1.5 w-24 bg-[#222222] overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#00E5FF] to-[#0099CC]" 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 2.2 }}
                  />
                </div>
                
                <div className="ff-badge mt-2">STEALTH</div>
                <div className="h-1.5 w-24 bg-[#222222] overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-400" 
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 2.4 }}
                  />
                </div>
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