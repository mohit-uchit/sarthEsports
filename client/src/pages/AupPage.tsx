import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AupPage() {
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
            Acceptable Use Policy
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></span>
          </h1>
          
          <div className="mt-8 space-y-8 text-gray-300">
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Acceptable Use Policy ("AUP") outlines the rules and guidelines for participating in the Free Fire Bermuda Solo Tournament ("Tournament") organized by Sarth Esports. This policy applies to all participants, spectators, and visitors to our website and tournament venues.
              </p>
              <p>
                By registering for the Tournament, accessing our website, or attending our events, you agree to comply with this AUP. Failure to adhere to these guidelines may result in disqualification, removal from the event, or restriction of access to our services.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">2. Fair Play and Gaming Integrity</h2>
              <p className="mb-4">
                All participants must adhere to the following fair play guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>No Cheating:</strong> The use of cheats, hacks, mods, or any unauthorized third-party software that alters game functionality is strictly prohibited.</li>
                <li><strong>No Exploits:</strong> Deliberately exploiting game bugs or glitches to gain an unfair advantage is not allowed.</li>
                <li><strong>No Teaming:</strong> In solo competition formats, forming alliances with other players during matches is prohibited.</li>
                <li><strong>No Account Sharing:</strong> Participants must play on their own accounts. Account sharing or allowing someone else to play on your behalf is not permitted.</li>
                <li><strong>No Smurfing:</strong> Creating new accounts to bypass rank restrictions or match with lower-skilled players is prohibited.</li>
                <li><strong>No Intentional Disconnections:</strong> Deliberately disconnecting to avoid elimination or manipulate game outcomes is not allowed.</li>
              </ul>
              <p>
                Sarth Esports reserves the right to investigate suspicious gameplay and make final decisions regarding violations of fair play principles.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">3. Behavior and Communication</h2>
              <p className="mb-4">
                All participants, spectators, and community members must maintain respectful behavior and communication:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>No Harassment:</strong> Harassment, bullying, intimidation, or threatening behavior toward any individual is prohibited.</li>
                <li><strong>No Hate Speech:</strong> Discriminatory language or content related to race, gender, religion, nationality, disability, sexual orientation, or age is not tolerated.</li>
                <li><strong>No Offensive Content:</strong> Posting or sharing obscene, pornographic, violent, or otherwise offensive content is prohibited.</li>
                <li><strong>No Impersonation:</strong> Pretending to be another person, tournament official, or representative of Sarth Esports is not allowed.</li>
                <li><strong>No Spam:</strong> Excessive, repetitive, or irrelevant messages, advertisements, or promotions are prohibited.</li>
                <li><strong>No Doxxing:</strong> Sharing personal information of others without their consent is strictly forbidden.</li>
              </ul>
              <p>
                These rules apply to all forms of communication, including in-game chat, forum posts, social media, and verbal communication at events.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">4. Tournament Participation</h2>
              <p className="mb-4">
                Participants must follow these guidelines during the Tournament:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Punctuality:</strong> Be ready to join matches at least 15 minutes before the scheduled start time.</li>
                <li><strong>Communication:</strong> Respond promptly to tournament administrators and follow their instructions.</li>
                <li><strong>Software:</strong> Ensure your game client is updated to the latest version before matches.</li>
                <li><strong>Hardware:</strong> Make sure your device meets the minimum requirements and is in good working condition.</li>
                <li><strong>Internet Connection:</strong> Have a stable internet connection suitable for competitive gameplay.</li>
                <li><strong>Focus:</strong> Avoid running unnecessary background applications during matches.</li>
              </ul>
              <p>
                Repeated failure to meet these requirements may result in forfeiture of matches or disqualification from the Tournament.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">5. Website and Platform Usage</h2>
              <p className="mb-4">
                When using our website or tournament platforms:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Security:</strong> Do not attempt to breach, test, or circumvent security measures on our websites or platforms.</li>
                <li><strong>No Malicious Software:</strong> Do not upload or distribute viruses, malware, or other malicious code.</li>
                <li><strong>No Scraping:</strong> Automated scraping or data collection from our websites without permission is prohibited.</li>
                <li><strong>Accurate Information:</strong> Provide accurate and truthful information during registration and communications.</li>
                <li><strong>Respect Privacy:</strong> Do not attempt to access accounts or information belonging to other users.</li>
                <li><strong>Report Issues:</strong> Report any security vulnerabilities, bugs, or technical issues to Sarth Esports immediately.</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access to users who violate these guidelines.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                Respect for intellectual property rights is required:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>No Unauthorized Use:</strong> Do not use Sarth Esports logos, trademarks, or other proprietary content without permission.</li>
                <li><strong>Streaming Rights:</strong> Participants may stream their own gameplay during the Tournament unless explicitly prohibited in specific tournament rules.</li>
                <li><strong>Content Creation:</strong> You may create content related to the Tournament, but may not claim it as official tournament content unless authorized.</li>
                <li><strong>Tournament Broadcasts:</strong> Rebroadcasting official tournament streams without permission is prohibited.</li>
                <li><strong>Third-Party Content:</strong> Do not use copyrighted music, images, or other content in your streams without proper authorization.</li>
              </ul>
              <p>
                Sarth Esports reserves the right to request removal of content that violates these guidelines.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">7. Compliance with Laws</h2>
              <p className="mb-4">
                Participants must comply with all applicable laws and regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Do not engage in illegal activities through our platforms or during our events.</li>
                <li>Comply with age restrictions for game participation and tournament eligibility.</li>
                <li>Respect data privacy laws and the privacy rights of others.</li>
                <li>Do not engage in gambling, betting, or wagering related to tournament outcomes unless explicitly permitted by law and tournament rules.</li>
                <li>Do not promote, distribute, or sell unauthorized in-game items or currency.</li>
              </ul>
              <p>
                Violations of laws or regulations may be reported to appropriate authorities in addition to tournament penalties.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">8. Enforcement and Penalties</h2>
              <p className="mb-4">
                Violations of this Acceptable Use Policy may result in one or more of the following penalties:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Verbal or written warning</li>
                <li>Temporary suspension from tournament matches</li>
                <li>Disqualification from the current Tournament</li>
                <li>Ban from future tournaments and events</li>
                <li>Removal from tournament venues</li>
                <li>Forfeiture of prizes</li>
                <li>Restriction or termination of website and platform access</li>
                <li>Legal action in serious cases</li>
              </ul>
              <p>
                The severity of penalties will depend on the nature and frequency of violations. Sarth Esports administrators have the final authority in determining appropriate penalties.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">9. Reporting Violations</h2>
              <p className="mb-4">
                If you witness violations of this Acceptable Use Policy:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Document the violation with screenshots, recordings, or other evidence if possible</li>
                <li>Report the violation to tournament administrators through official communication channels</li>
                <li>Include relevant details such as the time, participants involved, and nature of the violation</li>
                <li>Do not publicly accuse others of violations before an official investigation</li>
                <li>Cooperate with administrators during investigations</li>
              </ol>
              <p>
                We take all reports seriously and will investigate them thoroughly while maintaining appropriate confidentiality.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">10. Policy Updates</h2>
              <p>
                Sarth Esports reserves the right to update this Acceptable Use Policy at any time. Significant changes will be announced on our website and through our official communication channels. Continued participation in the Tournament or use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">11. Contact Information</h2>
              <p>
                If you have questions about this Acceptable Use Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p>Email: admin@sarthesports.games</p>
                <p>Primary Address: Sushant Lok III, A-4B, Sector 57, Gurugram, Haryana 122003</p>
                <p>Secondary Address: St. Thomas, 00802 Rumer Rd Way, Charlotte Amalie, St Thomas 00802, US Virgin Islands</p>
              </div>
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