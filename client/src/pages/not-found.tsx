import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-black bg-opacity-90 text-white font-rajdhani relative"
    >
      <Header />

      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      <main className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-audiowide text-9xl text-[#FF5722] mb-6">404</h1>
          
          <h2 className="font-orbitron text-4xl md:text-5xl text-[#00E5FF] mb-6">
            PAGE NOT FOUND
          </h2>

          <div className="h-1 w-64 bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl mb-8">
            The page you're looking for might have been eliminated from the battleground.
          </p>

          <div className="glitch-box w-full max-w-md mx-auto p-6 border border-[#FF5722]/30 bg-black/40 backdrop-blur mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/10 to-[#00E5FF]/10 animate-pulse"></div>
            <div className="relative z-10 space-y-2">
              <div className="font-mono text-sm text-[#00E5FF]">ERROR://404_PLAYER_LOST</div>
              <div className="font-mono text-xs text-gray-400">COORDINATES: UNDEFINED</div>
              <div className="font-mono text-xs text-gray-400">SYSTEM: BREACH DETECTED</div>
              <div className="font-mono text-xs text-gray-400">STATUS: MISSING_LOCATION</div>
              <div className="h-2"></div>
              <div className="font-mono text-xs text-[#FF5722]">RECOMMENDED ACTION:</div>
              <div className="font-mono text-xs text-white">RETURN TO SAFE ZONE &gt;</div>
            </div>
          </div>
          
          <Link href="/">
            <a className="ff-button relative overflow-hidden group inline-block">
              <span className="relative block font-orbitron text-white font-bold tracking-wider uppercase px-8 py-4 z-10">
                Return to Homepage
              </span>
              <div 
                className="absolute top-0 left-0 w-full h-full bg-[#FF5722]/20 z-0"
              />
            </a>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}