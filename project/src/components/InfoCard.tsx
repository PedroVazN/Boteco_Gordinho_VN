
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type InfoCardProps = {
  title: string;
  content: ReactNode;
  delay: number;
};

const InfoCard = ({ title, content, delay }: InfoCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-restaurant-dark rounded-lg p-6 gold-border elegant-shadow fade-up"
    >
      <h3 className="text-xl font-serif font-semibold text-restaurant-primary mb-3">{title}</h3>
      <div className="text-gray-300">
        {content}
      </div>
    </motion.div>
  );
};

export default InfoCard;
