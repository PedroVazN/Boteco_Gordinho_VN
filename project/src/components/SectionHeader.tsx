
import React from 'react';

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 fade-up">
      <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text inline-block">{title}</h2>
      <div className="flex items-center justify-center mt-4">
        <div className="h-px w-12 bg-restaurant-accent"></div>
        <div className="h-1 w-12 mx-2 bg-restaurant-primary rounded-full"></div>
        <div className="h-px w-12 bg-restaurant-accent"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
