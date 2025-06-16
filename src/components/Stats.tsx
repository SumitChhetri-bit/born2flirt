import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Star } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Members", color: "pink" },
    { icon: MessageSquare, value: "1M+", label: "Messages", color: "purple" },
    { icon: Heart, value: "10K+", label: "Connections", color: "blue" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "yellow" }
  ];

  return (
    <div className="py-20 px-4 bg-[#2d2d2d]/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center mb-4 mx-auto`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;