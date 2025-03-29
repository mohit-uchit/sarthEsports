import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameRules from "@/components/GameRules";
import ScoringSystem from "@/components/ScoringSystem";

export default function RulesPage() {
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
              <span className="text-game-accent">Rules</span>
            </h1>
            <p className="text-game-text-dim">
              Learn about the official rules, scoring system, and formats for the Free Fire Bermuda Solo Tournament.
              Follow these guidelines to ensure fair play and enjoyable experience for all participants.
            </p>
          </motion.div>
          
          <GameRules />
          <ScoringSystem />
        </div>
      </motion.main>
      
      <Footer />
    </>
  );
}