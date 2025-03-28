import { motion } from 'framer-motion';
import { CardWithNeon } from './ui/card-with-neon';

export default function TournamentDetails() {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1 * index,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h6 className="font-orbitron text-game-blue text-sm mb-2 uppercase tracking-widest">Tournament Details</h6>
          <h2 className="font-audiowide text-3xl md:text-4xl mb-4">BATTLE SPECIFICATIONS</h2>
          <div className="w-24 h-1 bg-game-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Detail Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0}
          >
            <CardWithNeon>
              <div className="mb-4 text-game-accent">
                <i className="fas fa-map-marked-alt text-3xl"></i>
              </div>
              <h3 className="font-orbitron text-xl mb-2">BERMUDA MAP</h3>
              <p className="text-game-text-dim">Classic Bermuda map with standard settings. Prove your skills in familiar territory.</p>
            </CardWithNeon>
          </motion.div>
          
          {/* Detail Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            <CardWithNeon>
              <div className="mb-4 text-game-accent">
                <i className="fas fa-user-alt text-3xl"></i>
              </div>
              <h3 className="font-orbitron text-xl mb-2">SOLO MODE</h3>
              <p className="text-game-text-dim">Every player for themselves. No teams, no help - just pure skill and strategy.</p>
            </CardWithNeon>
          </motion.div>
          
          {/* Detail Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
          >
            <CardWithNeon>
              <div className="mb-4 text-game-accent">
                <i className="fas fa-trophy text-3xl"></i>
              </div>
              <h3 className="font-orbitron text-xl mb-2">PRIZES</h3>
              <p className="text-game-text-dim">Exclusive in-game rewards, diamonds, and recognition in the Sarth Esports community.</p>
            </CardWithNeon>
          </motion.div>
        </div>
        
        {/* Tournament schedule */}
        <div className="mt-16 bg-game-dark-alt p-6 rounded-md relative overflow-hidden neon-border">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-game-accent to-transparent opacity-30"></div>
          
          <h3 className="font-audiowide text-2xl mb-6 text-center">TOURNAMENT SCHEDULE</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Schedule Item 1 */}
            <div className="border border-game-blue-dim p-4 rounded-sm relative hover:bg-game-blue-dim transition-colors duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-game-blue"></div>
              <h4 className="font-orbitron mb-2">REGISTRATION</h4>
              <p className="text-game-text-dim mb-2">September 15-25, 2023</p>
              <div className="text-game-blue text-sm">
                <i className="fas fa-clock mr-2"></i>Open Now
              </div>
            </div>
            
            {/* Schedule Item 2 */}
            <div className="border border-game-blue-dim p-4 rounded-sm relative hover:bg-game-blue-dim transition-colors duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-game-blue"></div>
              <h4 className="font-orbitron mb-2">QUALIFIERS</h4>
              <p className="text-game-text-dim mb-2">September 30, 2023</p>
              <div className="text-game-blue text-sm">
                <i className="fas fa-hourglass-half mr-2"></i>Coming Soon
              </div>
            </div>
            
            {/* Schedule Item 3 */}
            <div className="border border-game-blue-dim p-4 rounded-sm relative hover:bg-game-blue-dim transition-colors duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-game-blue"></div>
              <h4 className="font-orbitron mb-2">FINALS</h4>
              <p className="text-game-text-dim mb-2">October 5, 2023</p>
              <div className="text-game-blue text-sm">
                <i className="fas fa-hourglass-half mr-2"></i>Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
