import React from "react";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { type SectionProps, type PlacementPoint, type KillPoint } from "../lib/types";
import { Circle, Target, Swords, Trophy, Medal } from "lucide-react";
import { CardWithNeon } from "./ui/card-with-neon";

export default function ScoringSystem() {
  const sectionProps: SectionProps = {
    id: "scoring",
    title: "Scoring System",
    subtitle: "Point Distribution & Tournament Rewards",
    icon: "scoring"
  };

  // Placement points for solo Bermuda matches
  const placementPoints: PlacementPoint[] = [
    { label: "1st Place", points: 15 },
    { label: "2nd Place", points: 12 },
    { label: "3rd Place", points: 10 },
    { label: "4th Place", points: 8 },
    { label: "5th Place", points: 6 },
    { label: "6th Place", points: 4 },
    { label: "7th Place", points: 2 },
    { label: "8th Place", points: 1 },
    { label: "9th Place", points: 1 },
    { label: "10th Place", points: 1 },
  ];

  // Kill points and bonuses
  const killPoints: KillPoint[] = [
    { label: "Per Elimination", points: 1 },
    { label: "Kill Leader Bonus", points: 5 },
    { label: "First Blood Bonus", points: 1 },
    { label: "Triple Kill", points: 2 },
  ];

  // Special awards and medals
  const specialAwards = [
    {
      name: "Tournament MVP",
      description: "Awarded to the player with the highest total score.",
      reward: "Weekly Membership + Pre-entry to the next tournament."
    },
    {
      name: "Kill Leader",
      description: "Given to the player with the most eliminations across all matches.",
      reward: "100 Diamonds + Pre-entry to the next tournament."
    },
    {
      name: "Survival Specialist",
      description: "Recognizing the player with the best average placement throughout the tournament.",
      reward: "Entry into Sarth Esports Pro League."
    },
    {
      name: "Participation Gift",
      description: "A token of appreciation for all tournament participants.",
      reward: "Participation Certificate."
    }
  ];
  
  return (
    <section
      id={sectionProps.id}
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto space-y-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {sectionProps.title}
          </h2>
          <p className="text-cyan-400 mt-2 text-lg">{sectionProps.subtitle}</p>
          <Separator className="mt-4 bg-cyan-800/50 mx-auto w-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placement Points Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardWithNeon>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Placement Points</h3>
                </div>
                
                <div className="space-y-3">
                  {placementPoints.map((placement, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center border-b border-gray-800 pb-2"
                    >
                      <div className="flex items-center gap-2">
                        <Circle className="h-3 w-3 text-cyan-400" />
                        <span className="text-gray-300">{placement.label}</span>
                      </div>
                      <span className="font-bold text-cyan-400">{placement.points} pts</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-gray-400 text-sm">
                  <p>* 11th-20th place: 0 points</p>
                </div>
              </div>
            </CardWithNeon>
          </motion.div>

          {/* Kill Points Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardWithNeon>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Swords className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Elimination Points</h3>
                </div>
                
                <div className="space-y-3">
                  {killPoints.map((kill, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center border-b border-gray-800 pb-2"
                    >
                      <div className="flex items-center gap-2">
                        <Target className="h-3 w-3 text-red-500" />
                        <span className="text-gray-300">{kill.label}</span>
                      </div>
                      <span className="font-bold text-red-500">{kill.points} pts</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-3 bg-gray-900/50 rounded-md border border-red-900/30">
                  <p className="text-gray-300 text-sm">
                    <span className="text-red-400 font-bold">Note:</span> Kill points are awarded instantly during the match and will be added to your total score.
                  </p>
                </div>
              </div>
            </CardWithNeon>
          </motion.div>
        </div>

        {/* Special Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Special Awards</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialAwards.map((award, index) => (
              <CardWithNeon key={index} className="h-full">
                <div className="p-4 text-center h-full flex flex-col justify-between">
                  <div>
                    <Medal className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">{award.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{award.description}</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-2 rounded-md">
                    <p className="text-cyan-400 text-sm font-medium">{award.reward}</p>
                  </div>
                </div>
              </CardWithNeon>
            ))}
          </div>
        </motion.div>

        {/* Tiebreaker Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-lg border border-cyan-800/30">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tiebreaker Rules
            </h4>
            <p className="text-gray-300 text-sm">
              In case of a tie in the final standings, the following tiebreakers will be applied in order:
            </p>
            <ol className="mt-2 space-y-1 text-gray-300 text-sm list-decimal pl-4">
              <li>Total eliminations across all matches</li>
              <li>Highest placement in any single match</li>
              <li>Most recent higher placement between tied players</li>
              <li>Coin toss (in extreme cases)</li>
            </ol>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}