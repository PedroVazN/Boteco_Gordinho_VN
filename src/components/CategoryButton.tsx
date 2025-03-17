
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type CategoryButtonProps = {
  name: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  index?: number;
  isMobile?: boolean;
};

const CategoryButton = ({ 
  name, 
  icon: Icon, 
  isActive, 
  onClick, 
  index = 0,
  isMobile = false
}: CategoryButtonProps) => {
  if (isMobile) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "w-full text-left py-3 px-4 flex items-center gap-3 font-medium transition-all",
          isActive ? "text-restaurant-primary bg-restaurant-secondary" : "text-gray-300 hover:text-restaurant-primaryLight",
        )}
      >
        <Icon size={18} />
        <span>{name}</span>
      </button>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className={cn(
        "nav-link px-4 py-2 flex items-center gap-2",
        isActive ? "text-restaurant-primary" : "text-gray-300 hover:text-restaurant-primaryLight"
      )}
    >
      <Icon size={18} className={isActive ? "text-restaurant-primary" : "text-gray-400"} />
      <span>{name}</span>
    </motion.button>
  );
};

export default CategoryButton;
