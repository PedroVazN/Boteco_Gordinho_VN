
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type InfoCardProps = {
  title: string;
  content: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
};

const InfoCard = ({ title, content, icon: Icon, className, delay = 1 }: InfoCardProps) => {
  return (
    <div 
      className={cn(
        "bg-restaurant-secondary p-6 rounded-lg border border-restaurant-primary/20 shadow-lg shadow-restaurant-primary/10 fade-up",
        `stagger-delay-${delay}`,
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon size={22} className="text-restaurant-accent" />}
        <h3 className="text-xl font-serif font-semibold text-restaurant-primary">{title}</h3>
      </div>
      <div className="text-gray-300">{content}</div>
    </div>
  );
};

export default InfoCard;
