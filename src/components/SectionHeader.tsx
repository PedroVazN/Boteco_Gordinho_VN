
import React from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  className?: string;
};

const SectionHeader = ({ title, className }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-4xl font-serif font-bold gold-gradient-text mb-2 fade-up">{title}</h2>
      <div className="flex items-center justify-center gap-2 fade-up">
        <div className="h-px w-12 bg-restaurant-primary/50"></div>
        <div className="text-restaurant-primary">✦</div>
        <div className="h-px w-12 bg-restaurant-primary/50"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
