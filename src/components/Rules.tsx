import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, Heart, MessageSquare } from 'lucide-react';

const Rules: React.FC = () => {
  const rules = [
    {
      icon: Shield,
      title: "Respect Everyone",
      description: "Treat all members with respect and kindness"
    },
    {
      icon: AlertCircle,
      title: "No NSFW Content",
      description: "Keep all content family-friendly"
    },
    {
      icon: Heart,
      title: "Be Inclusive",
      description: "No discrimination or hate speech"
    },
    {
      icon: MessageSquare,
      title: "No Spamming",
      description: "Avoid excessive messages or self-promotion"
    }
  ];

  return (
    <div className="py-20 px-4 bg-[#2d2d2d]/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Community Guidelines
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Help us maintain a positive and welcoming environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-all duration-300 flex items-start gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                <rule.icon className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
                <p className="text-gray-400">{rule.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;