import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MessageCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl" />
      <div className="container mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-pink-500">Join 9000+ members</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Welcome to Born2Flirt
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our vibrant community where connections bloom and conversations sparkle ✨
          </p>
          <motion.a
            href="https://discord.gg/born2flirt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5" />
            Join Now
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: Heart, title: "Make Connections", desc: "Find like-minded people", color: "pink" },
            { icon: Users, title: "Active Community", desc: "24/7 engaging conversations", color: "purple" },
            { icon: MessageCircle, title: "Safe Space", desc: "Moderated environment", color: "blue" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-4 mx-auto`}>
                <item.icon className={`w-6 h-6 text-${item.color}-500`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;