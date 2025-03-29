import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
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
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="font-audiowide text-4xl md:text-5xl text-[#00E5FF] mb-6 relative inline-block">
            Terms of Service
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></span>
          </h1>
          
          <div className="mt-8 space-y-8 text-gray-300">
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and participating in the Free Fire Bermuda Solo Tournament organized by Sarth Esports, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not participate in the tournament.
              </p>
              <p>
                Sarth Esports reserves the right to modify these terms at any time, and such modifications shall be effective immediately upon posting on the tournament website. Your continued participation in the tournament will constitute your acceptance of the modified terms.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">2. Tournament Eligibility</h2>
              <p className="mb-4">
                Participants must meet the following requirements to be eligible for the tournament:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Must be at least 14 years old. Participants under 18 must have parental consent.</li>
                <li>Must have a valid Free Fire account in good standing.</li>
                <li>Must register with accurate information before the registration deadline.</li>
                <li>Must comply with all tournament rules and guidelines.</li>
                <li>Must own the necessary hardware and software to participate.</li>
              </ul>
              <p>
                Sarth Esports reserves the right to verify the eligibility of any participant and to disqualify anyone who does not meet these requirements.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">3. Code of Conduct</h2>
              <p className="mb-4">
                All participants are expected to adhere to the following code of conduct:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Play fairly and do not use any unauthorized third-party programs, cheats, hacks, or exploits.</li>
                <li>Behave respectfully towards other participants, tournament officials, and spectators.</li>
                <li>Do not engage in any form of harassment, hate speech, or discriminatory behavior.</li>
                <li>Follow the instructions of tournament officials at all times.</li>
                <li>Do not share accounts or allow others to play on your behalf.</li>
                <li>Do not team up with other players in solo matches.</li>
              </ul>
              <p>
                Violation of this code of conduct may result in disqualification, forfeiture of prizes, and possible ban from future tournaments.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">4. Tournament Format and Rules</h2>
              <p className="mb-4">
                The tournament will follow the format and rules as described on the tournament website and shared with participants before the event. These include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Match schedules and durations</li>
                <li>Scoring system</li>
                <li>Advancement criteria</li>
                <li>Match-specific rules</li>
                <li>Technical requirements</li>
              </ul>
              <p className="mb-4">
                Sarth Esports reserves the right to modify the tournament format and rules at any time for any reason, including but not limited to maintaining the integrity of the competition and addressing technical issues.
              </p>
              <p>
                In case of disputes, the decision of tournament officials is final and binding.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">5. Prizes and Rewards</h2>
              <p className="mb-4">
                The tournament prizes will be awarded as specified on the tournament website. To receive prizes, winners may be required to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate personal information</li>
                <li>Complete any required tax forms</li>
                <li>Comply with verification procedures</li>
                <li>Claim prizes within the specified timeframe</li>
              </ul>
              <p className="mb-4">
                Prizes are non-transferable and cannot be exchanged for cash unless explicitly stated otherwise.
              </p>
              <p>
                Sarth Esports is not responsible for any technical issues that may prevent the delivery of digital prizes.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                By participating in the tournament, you grant Sarth Esports the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Record, broadcast, and distribute footage of your gameplay</li>
                <li>Use your name, username, likeness, and social media handles for promotional purposes</li>
                <li>Create and share highlights, recaps, and other content featuring your participation</li>
              </ul>
              <p>
                All tournament materials, including logos, graphics, and promotional content, are the property of Sarth Esports or its licensors and may not be used without permission.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                Sarth Esports is not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Technical issues that may affect gameplay, including but not limited to internet connectivity problems, hardware failures, or software glitches</li>
                <li>Personal injury or property damage resulting from participation in the tournament</li>
                <li>Actions of other participants or third parties</li>
                <li>Any indirect, incidental, special, or consequential damages</li>
              </ul>
              <p>
                By participating in the tournament, you acknowledge these risks and agree to hold Sarth Esports harmless from any claims arising from your participation.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at admin@sarthesports.games.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-center text-sm">
                Last updated: March 29, 2025
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}