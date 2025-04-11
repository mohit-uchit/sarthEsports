import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TournamentDetails from '../components/TournamentDetails';
import GameRules from '../components/GameRules';
import ScoringSystem from '../components/ScoringSystem';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

// Animation variants
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.5,
    },
  },
};

// Countdown functionality
function TournamentCountdown() {
  // Tournament date - set to a date in the future
  const tournamentDate = new Date('2025-04-12T13:30:00Z');

  const calculateTimeLeft = () => {
    const difference = Number(tournamentDate) - Number(new Date());

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="ff-countdown mt-8 flex-wrap justify-center">
      <div className="ff-countdown-item min-w-[60px] sm:min-w-[70px]">
        <span className="ff-countdown-number text-base sm:text-lg md:text-xl">
          {timeLeft.days}
        </span>
        <span className="ff-countdown-label text-[10px] sm:text-xs">Days</span>
      </div>
      <div className="ff-countdown-item min-w-[60px] sm:min-w-[70px]">
        <span className="ff-countdown-number text-base sm:text-lg md:text-xl">
          {timeLeft.hours}
        </span>
        <span className="ff-countdown-label text-[10px] sm:text-xs">Hours</span>
      </div>
      <div className="ff-countdown-item min-w-[60px] sm:min-w-[70px]">
        <span className="ff-countdown-number text-base sm:text-lg md:text-xl">
          {timeLeft.minutes}
        </span>
        <span className="ff-countdown-label text-[10px] sm:text-xs">
          Minutes
        </span>
      </div>
      <div className="ff-countdown-item min-w-[60px] sm:min-w-[70px]">
        <span className="ff-countdown-number text-base sm:text-lg md:text-xl">
          {timeLeft.seconds}
        </span>
        <span className="ff-countdown-label text-[10px] sm:text-xs">
          Seconds
        </span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={pageTransition}
    >
      <Header />
      <main className="flex-grow relative">
        <div className="free-fire-theme animated-bg">
          {/* Floating decoration elements */}
          <motion.div
            className="absolute top-40 left-10 w-24 h-24 border border-[#FF5722] opacity-20 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute top-60 right-10 w-16 h-16 border border-[#00E5FF] opacity-20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-[30%] right-[20%] w-48 h-2 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent opacity-20"
            animate={{
              x: [-100, 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute top-[50%] left-[10%] w-32 h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-20"
            animate={{
              x: [100, -100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />

          <HeroSection />

          {/* Tournament Countdown */}
          <motion.div
            className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-audiowide mb-4 text-center text-game-accent">
              TOURNAMENT COUNTDOWN
            </h2>
            <div className="px-2 overflow-x-auto w-full">
              <TournamentCountdown />
            </div>
          </motion.div>

          <TournamentDetails />
          <GameRules />
          <ScoringSystem />
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
