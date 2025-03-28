import { motion } from "framer-motion";
import logoPath from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-16 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-game-blue via-transparent to-game-accent opacity-30"></div>
      </div>
      
      {/* Tech accent elements */}
      <div className="absolute top-0 left-8 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#00E5FF" strokeWidth="1" fill="none" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="20" stroke="#00E5FF" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-8 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#FF5722" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#FF5722" strokeWidth="1" fill="none" strokeDasharray="1 3" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-3 overflow-hidden rounded-lg border border-game-accent">
                <img src={logoPath} alt="Sarth Esports Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-audiowide text-2xl text-game-blue">SARTH <span className="text-game-accent">ESPORTS</span></h3>
                <p className="text-xs text-gray-400">FREE FIRE TOURNAMENT</p>
              </div>
            </div>
            <p className="text-gray-400">Premier Free Fire Tournament organizer in the region. Join our community and showcase your gaming skills.</p>
            <div className="flex space-x-4 pt-2">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-game-blue border border-game-blue/30 hover:bg-game-blue hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-game-blue border border-game-blue/30 hover:bg-game-blue hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-game-blue border border-game-blue/30 hover:bg-game-blue hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-game-blue border border-game-blue/30 hover:bg-game-blue hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-white text-lg mb-5 pb-2 border-b border-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-game-blue transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-game-blue transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Leaderboards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-game-blue transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  News & Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-game-blue transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-400 hover:text-game-blue transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Register Now
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron text-white text-lg mb-5 pb-2 border-b border-gray-800">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-game-accent mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:deadsec.darky@gmail.com" className="hover:text-game-blue transition-colors">deadsec.darky@gmail.com</a>
              </li>
              <li className="flex items-start text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-game-accent mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-game-accent mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Esports Training Facility<br/>123 Gaming Avenue<br/>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sarth Esports. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-game-blue transition-colors">Terms & Conditions</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-game-blue transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-game-blue transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
