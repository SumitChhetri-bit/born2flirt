import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Code } from 'lucide-react';

const Team: React.FC = () => {
  const owners = [
    { name: "DUKE", role: "Owner" },
    { name: "URAHRA", role: "Owner" },
    { name: "SUMIT", role: "Owner" }
  ];

  const developers = [
    { name: "SUMIT", role: "Lead Developer" }
  ];

  return (
    <div className="py-20 px-4 bg-[#2d2d2d]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-400">The amazing people behind Born2Flirt</p>
        </motion.div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Crown className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-semibold">Owners</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {owners.map((owner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-pink-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{owner.name[0]}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{owner.name}</h4>
                <p className="text-pink-500">{owner.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-8">
            <Code className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold">Development Team</h3>
          </div>
          <div className="max-w-sm mx-auto">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-blue-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{dev.name[0]}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{dev.name}</h4>
                <p className="text-blue-500">{dev.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;