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

  return (
    <section id="tournament" className="py-24 relative bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-game-blue via-transparent to-game-blue opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-game-accent to-transparent opacity-30"></div>
        
        {/* Animated accents */}
        <motion.div 
          className="absolute top-40 right-10 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#00E5FF" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" />
            <path d="M50,5 L50,95 M5,50 L95,50" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 3" />
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
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-game-accent/20 to-transparent border-r border-t border-game-accent mb-3">
            <h6 className="font-orbitron text-game-accent text-sm uppercase tracking-widest">Tournament Details</h6>
          </div>
          <h2 className="font-audiowide text-4xl md:text-5xl mb-6 text-white">
            BATTLE <span className="text-game-blue">SPECIFICATIONS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-game-accent to-red-700 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Detail Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-game-blue/30 p-8 relative h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-game-blue"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-game-blue"></div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-game-blue to-transparent opacity-50"></div>
              
              {/* Icon */}
              <div className="mb-6 text-game-blue">
                <div className="w-16 h-16 mx-auto bg-game-blue/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white">BERMUDA MAP</h3>
              <p className="text-gray-400 text-center">
                Classic Bermuda map with standard competitive settings. Prove your skills in familiar territory with high-intensity combat zones.
              </p>
            </div>
          </motion.div>
          
          {/* Detail Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-game-accent/30 p-8 relative h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-game-accent"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-game-accent"></div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-game-accent to-transparent opacity-50"></div>
              
              {/* Icon */}
              <div className="mb-6 text-game-accent">
                <div className="w-16 h-16 mx-auto bg-game-accent/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white">SOLO MODE</h3>
              <p className="text-gray-400 text-center">
                Every player for themselves. No teams, no help - just pure skill, strategy and survival. Last player standing wins it all.
              </p>
            </div>
          </motion.div>
          
          {/* Detail Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-game-blue/30 p-8 relative h-full">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-game-blue"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-game-blue"></div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-game-blue to-transparent opacity-50"></div>
              
              {/* Icon */}
              <div className="mb-6 text-game-blue">
                <div className="w-16 h-16 mx-auto bg-game-blue/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M12 2v7"></path>
                    <path d="m18 9-6 5-6-5"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="font-orbitron text-xl mb-4 text-center text-white">PRIZES</h3>
              <p className="text-gray-400 text-center">
                Exclusive in-game rewards, diamonds, cash prizes and recognition in the Sarth Esports community. Glory awaits the champion.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Tournament schedule */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-black/80 backdrop-blur-md rounded-lg border border-gray-800 p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-game-blue via-transparent to-game-accent"></div>
            <div className="absolute top-1 right-1 w-20 h-20">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <circle cx="70" cy="30" r="20" fill="none" stroke="#FF5722" strokeWidth="1" />
                <circle cx="70" cy="30" r="10" fill="none" stroke="#FF5722" strokeWidth="1" />
              </svg>
            </div>
            
            <h3 className="font-audiowide text-3xl mb-8 text-center text-white">
              TOURNAMENT <span className="text-game-accent">SCHEDULE</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Schedule Item 1 */}
              <motion.div 
                className="relative bg-gradient-to-b from-gray-900 to-black border border-game-blue/20 rounded p-6 hover:border-game-blue transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 rounded-full bg-game-blue flex items-center justify-center text-black font-bold">1</div>
                </div>
                <h4 className="font-orbitron text-lg mb-3 text-game-blue">REGISTRATION</h4>
                <p className="text-gray-400 mb-3">March 28 - April 15, 2025</p>
                <div className="text-white text-sm inline-block px-3 py-1 bg-game-blue/20 rounded-full border border-game-blue/40">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Open Now
                </div>
              </motion.div>
              
              {/* Schedule Item 2 */}
              <motion.div 
                className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded p-6 hover:border-game-blue transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">2</div>
                </div>
                <h4 className="font-orbitron text-lg mb-3 text-white">QUALIFIERS</h4>
                <p className="text-gray-400 mb-3">April 20, 2025</p>
                <div className="text-white text-sm inline-block px-3 py-1 bg-gray-800/60 rounded-full border border-gray-700">
                  Coming Soon
                </div>
              </motion.div>
              
              {/* Schedule Item 3 */}
              <motion.div 
                className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded p-6 hover:border-game-blue transition-all duration-300" 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">3</div>
                </div>
                <h4 className="font-orbitron text-lg mb-3 text-white">FINALS</h4>
                <p className="text-gray-400 mb-3">April 25, 2025</p>
                <div className="text-white text-sm inline-block px-3 py-1 bg-gray-800/60 rounded-full border border-gray-700">
                  Coming Soon
                </div>
              </motion.div>
            </div>
            
            {/* Rules summary */}
            <div className="mt-10 bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg border border-gray-800">
              <h4 className="font-orbitron text-white mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                IMPORTANT RULES
              </h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-game-blue mr-2">•</span>
                  Players must have a stable internet connection and the latest version of Free Fire.
                </li>
                <li className="flex items-start">
                  <span className="text-game-blue mr-2">•</span>
                  No emulators allowed. Mobile devices only.
                </li>
                <li className="flex items-start">
                  <span className="text-game-blue mr-2">•</span>
                  Any form of cheating will result in immediate disqualification.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
