import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisteredPlayers from "@/components/RegisteredPlayers";

export default function PlayersPage() {
  return (
    <>
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-24 pb-16"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-audiowide mb-6">
              <span className="text-game-blue">Tournament</span>{" "}
              <span className="text-game-accent">Participants</span>
            </h1>
            <p className="text-game-text-dim">
              View the complete list of registered players for the Free Fire Bermuda Solo Tournament. 
              Tournament registration closes once we reach the maximum player limit of 48 players.
            </p>
          </motion.div>
          
          <RegisteredPlayers />
        </div>
      </motion.main>
      
      <Footer />
    </>
  );
}