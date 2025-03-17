
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type ToggleButtonProps = {
  isActive: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
};

const ToggleButton = ({ isActive, onClick, icon: Icon, label }: ToggleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
        isActive 
          ? "bg-restaurant-primary text-white" 
          : "text-gray-400 hover:text-restaurant-primaryLight"
      )}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default ToggleButton;
