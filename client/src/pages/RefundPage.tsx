import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefundPage() {
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
            Refund Policy
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></span>
          </h1>
          
          <div className="mt-8 space-y-8 text-gray-300">
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Refund Policy outlines the guidelines and procedures for requesting refunds for registration fees and purchases related to the Free Fire Bermuda Solo Tournament organized by Sarth Esports.
              </p>
              <p>
                We aim to provide a fair and transparent refund process while maintaining the integrity of our tournament operations. Please read this policy carefully before making any payments.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">2. Tournament Registration Fees</h2>
              <h3 className="font-orbitron text-xl text-white mb-2">2.1 Cancellation by Participant</h3>
              <p className="mb-4">
                If you need to cancel your tournament registration, the following refund terms apply:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>More than 7 days before the tournament:</strong> Full refund minus a 10% administrative fee.</li>
                <li><strong>3-7 days before the tournament:</strong> 50% refund.</li>
                <li><strong>Less than 3 days before the tournament:</strong> No refund.</li>
              </ul>
              
              <h3 className="font-orbitron text-xl text-white mb-2 mt-6">2.2 Cancellation or Postponement by Sarth Esports</h3>
              <p className="mb-4">
                If Sarth Esports cancels or postpones the tournament:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Tournament Cancellation:</strong> Full refund of registration fees.</li>
                <li><strong>Tournament Postponement:</strong> You may choose to participate on the new date or request a full refund.</li>
              </ul>
              <p>
                Refunds will be processed within 10 business days of the announcement of cancellation or postponement.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">3. In-Game Purchases and Tournament Merchandise</h2>
              <h3 className="font-orbitron text-xl text-white mb-2">3.1 Digital Items and In-Game Currency</h3>
              <p className="mb-4">
                For digital purchases related to the tournament:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Unused Digital Items:</strong> If you have not used or activated a digital item, you may request a refund within 48 hours of purchase.</li>
                <li><strong>Used or Activated Items:</strong> No refunds are available for digital items that have been used, activated, or consumed.</li>
                <li><strong>In-Game Currency:</strong> No refunds are available for in-game currency once it has been added to your account.</li>
              </ul>
              
              <h3 className="font-orbitron text-xl text-white mb-2 mt-6">3.2 Physical Merchandise</h3>
              <p className="mb-4">
                For physical merchandise and tournament memorabilia:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Unopened/Unused Items:</strong> You may return unopened merchandise in its original packaging within 14 days of delivery for a full refund.</li>
                <li><strong>Damaged or Defective Items:</strong> If you receive damaged or defective merchandise, contact us within 7 days of delivery for replacement or refund.</li>
                <li><strong>Custom or Personalized Items:</strong> Custom or personalized items cannot be returned unless there is a manufacturing defect.</li>
              </ul>
              <p>
                Shipping costs for returns will be covered by Sarth Esports only if the item is damaged or defective. Otherwise, the customer is responsible for return shipping costs.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">4. Technical Issues and Service Disruptions</h2>
              <p className="mb-4">
                If you experience technical issues during the tournament:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Server Issues:</strong> If server issues prevent your participation in the tournament, we will offer a partial or full refund based on the extent of the disruption.</li>
                <li><strong>Individual Technical Problems:</strong> For technical issues specific to your setup (internet connection, device problems, etc.), refunds will be evaluated on a case-by-case basis.</li>
                <li><strong>Documentation Required:</strong> To request a refund due to technical issues, you must provide evidence of the problem (screenshots, error messages, etc.) within 24 hours of the occurrence.</li>
              </ul>
              <p>
                Sarth Esports will make the final determination regarding refunds for technical issues, taking into account all relevant factors.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">5. Disqualification and Rule Violations</h2>
              <p className="mb-4">
                No refunds will be provided if you are disqualified from the tournament due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Violation of tournament rules</li>
                <li>Cheating or using unauthorized programs</li>
                <li>Unsportsmanlike conduct</li>
                <li>Harassment of other players or tournament officials</li>
                <li>Account sharing or using multiple accounts</li>
                <li>Any other behavior that violates our Code of Conduct</li>
              </ul>
              <p>
                The decision of tournament administrators regarding disqualification is final.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">6. How to Request a Refund</h2>
              <p className="mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Contact us at admin@sarthesports.games with the subject line "Refund Request"</li>
                <li>Include your full name, email address used for registration, and order/registration ID</li>
                <li>Explain the reason for your refund request in detail</li>
                <li>Provide any relevant evidence or documentation</li>
                <li>Specify your preferred refund method (original payment method, bank transfer, etc.)</li>
              </ol>
              <p>
                We will process your request within 5-10 business days and notify you of our decision.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">7. Refund Methods and Processing Times</h2>
              <p className="mb-4">
                Refunds will be processed using the original payment method when possible:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>PayPal:</strong> 3-5 business days</li>
                <li><strong>Bank Transfers:</strong> 5-15 business days</li>
                <li><strong>Other Payment Methods:</strong> Processing times may vary</li>
              </ul>
              <p>
                Depending on your financial institution, it may take additional time for the refund to appear in your account.
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about our Refund Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p>Email: admin@sarthesports.games</p>
                <p>Address: Sushant Lok III, A-4B, Sector 57, Gurugram, Haryana 122003</p>
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