import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import { type SectionProps } from '../lib/types';
import {
  Crown,
  Shield,
  Clock,
  XCircle,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { CardWithNeon } from './ui/card-with-neon';

export default function GameRules() {
  const sectionProps: SectionProps = {
    id: 'rules',
    title: 'Game Rules',
    subtitle: 'Tournament Format & Guidelines',
    icon: 'rules',
  };

  const ruleCategories = [
    {
      title: 'Tournament Format',
      icon: <Crown className="h-6 w-6 text-cyan-400" />,
      rules: [
        'Solo Battle Royale matches on Bermuda map only',
        'Total of 3 matches across qualifiers and finals',
        '48 players maximum (first-come, first-served)',
        'Top 24 players from qualifiers advance to finals',
        'Custom room password will be shared 15 minutes before match start',
      ],
    },
    {
      title: 'Player Requirements',
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
      rules: [
        'Must have a valid Free Fire account (UID required)',
        'Players must be available 15 minutes before match start',
        'Minimum account level: 40+',
        'Phone/tablet devices only (no emulators allowed)',
        'Must join WhatsApp group for tournament communications',
      ],
    },
    {
      title: 'Scoring System',
      icon: <Award className="h-6 w-6 text-cyan-400" />,
      rules: [
        'Placement points based on final position (1st: 15pts, 2nd: 12pts, etc.)',
        'Kill points: 1 point per elimination',
        'Bonus points for Kill Leader (most kills in a match)',
        'Tiebreaker: Total kills, then best placement',
        'See detailed scoring system section below',
      ],
    },
    {
      title: 'Timing & Schedule',
      icon: <Clock className="h-6 w-6 text-cyan-400" />,
      rules: [
        'Qualifiers: April 12, 2025 - 7:00 PM IST',
        'Finals: April 13, 2025 - 8:00 PM IST',
        'Each match has a maximum duration of 40 minutes',
        'Check-in required 15 minutes before each match',
        'Results will be announced within 30 minutes after finals',
      ],
    },
    {
      title: 'Prohibited Actions',
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      rules: [
        'Teaming with other players',
        'Using hacks, mods or any unauthorized software',
        'Account sharing or using multiple accounts',
        'Toxic behavior in match chat or voice chat',
        'Disconnecting intentionally to avoid elimination',
      ],
    },
    {
      title: 'Technical Issues',
      icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
      rules: [
        'Matches will not be restarted for individual player issues',
        'Players are responsible for their internet connection',
        'Device crashes/issues are player responsibility',
        'Report technical problems to admins immediately',
        'Tournament organizers have final decision on all matters',
      ],
    },
  ];

  return (
    <section
      id={sectionProps.id}
      className="relative py-20 px-4 overflow-hidden bg-black"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ruleCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <CardWithNeon className="h-full">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold mt-1">•</span>
                        <span className="text-gray-300">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardWithNeon>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 italic">
            Tournament rules are subject to change. Any modifications will be
            announced in the official WhatsApp group. By registering, you agree
            to follow all tournament rules.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
