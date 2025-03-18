
import React from 'react';
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
      className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
        isActive
          ? 'bg-restaurant-primary text-white'
          : 'bg-transparent text-gray-400 hover:text-gray-300'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
};

export default ToggleButton;
