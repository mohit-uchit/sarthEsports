import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";

export default function ContactPage() {
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
          className="mb-10"
        >
          <h1 className="font-audiowide text-4xl md:text-5xl text-[#00E5FF] mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Have questions about our tournament or need assistance? Reach out to our team using the information below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5722]/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-[#FF5722] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-white">Address</h3>
                    <p className="text-gray-300">Sushant Lok III, A-4B, Sector 57, Gurugram, Haryana 122003</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00E5FF]/20 p-3 rounded-lg">
                    <FaEnvelope className="text-[#00E5FF] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-white">Email</h3>
                    <p className="text-gray-300">admin@sarthesports.games</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5722]/20 p-3 rounded-lg">
                    <FaInfoCircle className="text-[#FF5722] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-white">Company</h3>
                    <p className="text-gray-300">Sarth Esports (Startup)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00E5FF]/20 p-3 rounded-lg">
                    <FaCalendarAlt className="text-[#00E5FF] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-white">Founded</h3>
                    <p className="text-gray-300">December 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#00E5FF] mb-6">Operating Hours</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-4 text-gray-300">
                <p>* Hours may vary during tournament days</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm h-full">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-orbitron text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md p-3 text-white focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:outline-none transition"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-orbitron text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md p-3 text-white focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:outline-none transition"
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-orbitron text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md p-3 text-white focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:outline-none transition"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-orbitron text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md p-3 text-white focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:outline-none transition"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="ff-button relative overflow-hidden group w-full"
                >
                  <span className="relative block font-orbitron text-white font-bold tracking-wider uppercase px-8 py-4 z-10">
                    Send Message
                  </span>
                  <div 
                    className="absolute top-0 left-0 w-full h-full bg-[#FF5722]/20 z-0"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="font-orbitron text-2xl text-[#00E5FF] mb-6">Find Us</h2>
          <div className="rounded-lg overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.579297991992!2d77.0994573!3d28.4572996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18eff42f2789%3A0xead4e983d2b9c43e!2sSushant%20Lok%20III%2C%20Sector%2057%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1595954566406!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Sarth Esports Location"
            ></iframe>
          </div>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}