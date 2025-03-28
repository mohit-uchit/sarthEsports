export default function Footer() {
  return (
    <footer className="bg-game-dark-alt py-8 relative">
      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="font-audiowide text-2xl text-game-blue">SARTH ESPORTS</h3>
            <p className="text-game-text-dim mt-2">Premier Free Fire Tournament Host</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-game-dark flex items-center justify-center text-game-blue hover:bg-game-blue hover:text-black transition-colors">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-game-dark flex items-center justify-center text-game-blue hover:bg-game-blue hover:text-black transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-game-dark flex items-center justify-center text-game-blue hover:bg-game-blue hover:text-black transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-game-dark flex items-center justify-center text-game-blue hover:bg-game-blue hover:text-black transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-game-blue-dim pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-game-text-dim text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sarth Esports. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-game-text-dim">
            <a href="#" className="hover:text-game-blue transition">Terms & Conditions</a>
            <a href="#" className="hover:text-game-blue transition">Privacy Policy</a>
            <a href="#" className="hover:text-game-blue transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
