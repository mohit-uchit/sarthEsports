import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "../assets/images/logo.jpeg";

export default function Header() {
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scroll state for header animation
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Animation for the nav items
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  // Fire animations for the logo
  const fireLogoAnimation = {
    animate: {
      filter: ["drop-shadow(0 0 5px #FF5722) drop-shadow(0 0 10px #FF5722)", 
               "drop-shadow(0 0 10px #FF5722) drop-shadow(0 0 20px #FF5722)", 
               "drop-shadow(0 0 5px #FF5722) drop-shadow(0 0 10px #FF5722)"],
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        backgroundColor: scrollPosition > 50 ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.7)",
        backdropFilter: scrollPosition > 50 ? "blur(16px)" : "blur(8px)"
      }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 py-4 px-4 md:px-8 z-50 border-b border-[#FF5722]/30"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0 relative">
          <motion.div 
            className="free-fire-logo h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 mr-2 sm:mr-3 overflow-hidden rounded-lg"
            variants={fireLogoAnimation}
            animate="animate"
          >
            <img src={logoPath} alt="Sarth Esports Logo" className="w-full h-full object-cover" />
            <motion.div 
              className="absolute inset-0 border-2 border-[#FF5722] rounded-lg"
              animate={{
                boxShadow: ["0 0 5px rgba(255, 87, 34, 0.7)", "0 0 15px rgba(255, 87, 34, 0.9)", "0 0 5px rgba(255, 87, 34, 0.7)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <div>
            <h1 className="font-audiowide text-lg sm:text-xl md:text-2xl text-white">
              <motion.span 
                className="text-[#00E5FF] inline-block"
                animate={{ 
                  textShadow: ["0 0 5px rgba(0, 229, 255, 0.7)", "0 0 15px rgba(0, 229, 255, 0.9)", "0 0 5px rgba(0, 229, 255, 0.7)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                SARTH
              </motion.span>{" "}
              <motion.span 
                className="text-[#FF5722] inline-block"
                animate={{ 
                  textShadow: ["0 0 5px rgba(255, 87, 34, 0.7)", "0 0 15px rgba(255, 87, 34, 0.9)", "0 0 5px rgba(255, 87, 34, 0.7)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                ESPORTS
              </motion.span>
            </h1>
            
            <div className="relative mt-1">
              <p className="text-[10px] sm:text-xs text-game-text-dim font-orbitron tracking-wider">FREE FIRE TOURNAMENT</p>
              <motion.div 
                className="h-[1px] bg-gradient-to-r from-transparent via-[#FF5722] to-transparent"
                animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <motion.button
          className="md:hidden absolute top-4 right-4 w-10 h-10 flex flex-col justify-center items-center z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-[#FF5722] block mb-1.5"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#FF5722] block"
            animate={{ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? -20 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#FF5722] block mt-1.5"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { name: "Home", path: "/" },
            { name: "Players", path: "/players" },
            { name: "Rules", path: "/rules" },
            { name: "Contact", path: "/contact" }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              className="relative overflow-hidden group"
            >
              <Link 
                href={item.path} 
                className="font-orbitron text-sm uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5722]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          
          <motion.div
            className="relative group"
            custom={4}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
          >
            <span className="font-orbitron text-sm uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors cursor-pointer">
              Legal
            </span>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5722]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="hidden group-hover:block absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-md border border-[#FF5722]/30 rounded-md p-2 w-48">
              <Link href="/terms" className="block px-4 py-2 text-white hover:text-[#FF5722] text-sm font-orbitron">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block px-4 py-2 text-white hover:text-[#FF5722] text-sm font-orbitron">
                Privacy Policy
              </Link>
              <Link href="/refund" className="block px-4 py-2 text-white hover:text-[#FF5722] text-sm font-orbitron">
                Refund Policy
              </Link>
              <Link href="/aup" className="block px-4 py-2 text-white hover:text-[#FF5722] text-sm font-orbitron">
                Acceptable Use
              </Link>
            </div>
          </motion.div>
          
          <motion.a 
            href="/#registration"
            custom={5}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 87, 34, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="ff-button font-orbitron text-sm uppercase tracking-wider flex items-center gap-2 relative overflow-hidden"
          >
            <span className="relative z-10">Register Now</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/70 to-red-700/70 z-0"
              animate={{ x: ["-100%", "0%"] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>
        </nav>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex items-center justify-center"
              initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.nav 
                className="flex flex-col items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "Players", path: "/players" },
                  { name: "Rules", path: "/rules" },
                  { name: "Contact", path: "/contact" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <Link 
                      href={item.path} 
                      className="font-orbitron text-xl uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <motion.div 
                      className="absolute -bottom-2 left-0 w-full h-[1px]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1, background: ["linear-gradient(90deg, transparent, #FF5722, transparent)"] }}
                      transition={{ duration: 1, delay: 0.1 * i + 0.5 }}
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col items-center"
                >
                  <h3 className="font-orbitron text-lg uppercase tracking-wider text-[#00E5FF] mb-2">Legal</h3>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <Link 
                      href="/terms"
                      className="font-orbitron text-sm uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Terms
                    </Link>
                    <Link 
                      href="/privacy"
                      className="font-orbitron text-sm uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Privacy
                    </Link>
                    <Link 
                      href="/refund"
                      className="font-orbitron text-sm uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Refunds
                    </Link>
                    <Link 
                      href="/aup"
                      className="font-orbitron text-sm uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Usage
                    </Link>
                  </div>
                </motion.div>
                
                <motion.a 
                  href="/#registration"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ff-button mt-4 font-orbitron text-base uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </motion.a>
              </motion.nav>
              
              {/* Decorative elements for mobile menu */}
              <motion.div 
                className="absolute top-1/4 left-10 w-20 h-20 border border-[#FF5722] opacity-20 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute bottom-1/4 right-10 w-32 h-32 border border-[#00E5FF] opacity-20 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
