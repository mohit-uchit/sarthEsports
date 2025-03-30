import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
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
            Privacy Policy
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></span>
          </h1>
          
          <div className="mt-8 space-y-8 text-gray-300">
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to the Free Fire Bermuda Solo Tournament ("Tournament") organized by Sarth Esports. We are committed to protecting your privacy and handling your personal information with care.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, and safeguard your information when you participate in our Tournament or visit our website. By registering for the Tournament or using our website, you consent to the practices described in this policy.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and address for tournament registration and prize distribution.</li>
                <li><strong>Game Information:</strong> In-game name, user ID, gameplay statistics, and match results.</li>
                <li><strong>Technical Information:</strong> IP address, device information, browser type, and operating system when you visit our website.</li>
                <li><strong>Communication Information:</strong> Content of messages, emails, and other communications you send us.</li>
              </ul>
              <p>
                We collect this information when you register for the Tournament, participate in matches, contact our support team, or interact with our website.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To register you for the Tournament and verify your eligibility</li>
                <li>To organize and administer the Tournament, including creating brackets and match schedules</li>
                <li>To communicate with you about the Tournament and related events</li>
                <li>To distribute prizes to winners</li>
                <li>To create and share Tournament results and statistics</li>
                <li>To improve our website and Tournament experience</li>
                <li>To address technical issues and respond to support requests</li>
                <li>To protect against cheating, fraud, and other prohibited behaviors</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">4. Sharing of Information</h2>
              <p className="mb-4">
                We may share your information with the following third parties:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Tournament Partners:</strong> Game publishers, sponsors, or co-organizers who need information to support the Tournament.</li>
                <li><strong>Service Providers:</strong> Companies that provide services on our behalf, such as payment processing, email delivery, and analytics.</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.</li>
                <li><strong>Public Audience:</strong> Your gameplay, in-game name, and Tournament results may be publicly broadcast and shared.</li>
              </ul>
              <p>
                We require third parties who receive your information to protect it in accordance with applicable laws and regulations.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Encryption of sensitive information</li>
                <li>Limited access to personal information by authorized personnel</li>
                <li>Regular security assessments and updates</li>
                <li>Secure storage and processing practices</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us at admin@sarthesports.games. We will respond to your request in accordance with applicable laws.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">7. Children's Privacy</h2>
              <p className="mb-4">
                Our Tournament is intended for individuals who are at least 14 years old. We do not knowingly collect personal information from children under 14. If we discover that we have collected information from a child under 14, we will promptly delete it.
              </p>
              <p>
                If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on our website with a revised "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">9. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
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