import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.a
          href="https://discord.gg/born2flirt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="w-5 h-5" />
          <span>Join Born2Flirt Community</span>
        </motion.a>
        <p className="mt-4 text-gray-400">© 2024 Born2Flirt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;