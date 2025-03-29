import React from 'react';
import { motion } from 'framer-motion';

export default function AlokModel3D() {
  return (
    <motion.div 
      className="relative w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect behind the model */}
      <motion.div
        className="absolute inset-0 rounded-full -z-10"
        animate={{
          background: [
            "radial-gradient(circle at center, rgba(255, 87, 34, 0.3) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(255, 87, 34, 0.5) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(255, 87, 34, 0.3) 0%, transparent 70%)"
          ],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Embeded Sketchfab 3D model */}
      <motion.div 
        className="sketchfab-embed-wrapper w-full h-full" 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <iframe 
          title="FF Alok 3D Model" 
          className="w-full h-full"
          frameBorder="0" 
          allowFullScreen={true}
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          src="https://sketchfab.com/models/3cff31aa55e847edb8b0033d70420c51/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_infos=0&ui_controls=0&ui_help=0"
        ></iframe>
      </motion.div>
      
      {/* Animated rings around the model */}
      <motion.div 
        className="absolute inset-0 -z-5 border-2 border-cyan-500/30 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 -z-5 border border-orange-500/20 rounded-full"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Website logo in the circle center (bottom-left) */}
      <motion.div 
        className="absolute bottom-[15%] left-[15%] z-10 bg-[#111] rounded-full p-2 shadow-lg"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 10px rgba(0, 229, 255, 0.3)",
            "0 0 20px rgba(0, 229, 255, 0.5)",
            "0 0 10px rgba(0, 229, 255, 0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3L4 7.5L12 12L20 7.5L12 3Z" fill="#00E5FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4 16.5L12 21L20 16.5L12 12L4 16.5Z" fill="#FF5722" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.5V16.5L12 12L4 7.5Z" fill="#00BCD4" />
            <path fillRule="evenodd" clipRule="evenodd" d="M20 7.5V16.5L12 12L20 7.5Z" fill="#E64A19" />
          </svg>
        </div>
      </motion.div>
      
      {/* Website logo in the circle center (top-right) */}
      <motion.div 
        className="absolute top-[15%] right-[15%] z-10 bg-[#111] rounded-full p-2 shadow-lg"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 10px rgba(255, 87, 34, 0.3)",
            "0 0 20px rgba(255, 87, 34, 0.5)",
            "0 0 10px rgba(255, 87, 34, 0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3L4 7.5L12 12L20 7.5L12 3Z" fill="#FF5722" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4 16.5L12 21L20 16.5L12 12L4 16.5Z" fill="#00E5FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4 7.5V16.5L12 12L4 7.5Z" fill="#E64A19" />
            <path fillRule="evenodd" clipRule="evenodd" d="M20 7.5V16.5L12 12L20 7.5Z" fill="#00BCD4" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}