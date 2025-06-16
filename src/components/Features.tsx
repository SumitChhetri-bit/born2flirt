import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gift, Music, GamepadIcon, Camera, Coffee } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe Environment",
      description: "24/7 moderation team ensuring a respectful community",
      color: "blue"
    },
    {
      icon: Gift,
      title: "Regular Events",
      description: "Fun community events and giveaways",
      color: "purple"
    },
    {
      icon: Music,
      title: "Music Channels",
      description: "High-quality music bots and channels",
      color: "pink"
    },
    {
      icon: GamepadIcon,
      title: "Gaming Sessions",
      description: "Regular gaming events with community",
      color: "green"
    },
    {
      icon: Camera,
      title: "Media Sharing",
      description: "Dedicated channels for sharing memories",
      color: "yellow"
    },
    {
      icon: Coffee,
      title: "Chill Zones",
      description: "Relaxed areas for casual conversations",
      color: "orange"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Community Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes our community special and unique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;