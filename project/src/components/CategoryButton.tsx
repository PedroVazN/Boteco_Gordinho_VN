
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type CategoryButtonProps = {
  name: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
};

const CategoryButton = ({ name, icon: Icon, isSelected, onClick }: CategoryButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
        isSelected 
          ? 'bg-restaurant-primary text-white' 
          : 'bg-restaurant-secondary text-gray-300 hover:bg-restaurant-secondary/80'
      }`}
    >
      <Icon size={18} />
      <span>{name}</span>
    </motion.button>
  );
};

export default CategoryButton;
