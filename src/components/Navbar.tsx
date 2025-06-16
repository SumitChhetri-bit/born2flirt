import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-[#1a1a1a]/80 backdrop-blur-lg z-50 py-4"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="w-6 h-6 text-pink-500" />
          <span className="text-2xl font-bold text-white font-poppins">Born2Flirt</span>
        </motion.div>
        
        <motion.a
          href="https://discord.gg/born2flirt"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Community
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;