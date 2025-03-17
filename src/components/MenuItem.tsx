
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MenuItemProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  marmitexPrice?: string;
  category: string;
  image: string;
  isMarmitex: boolean;
  index: number;
};

const MenuItem = ({
  name,
  description,
  price,
  marmitexPrice,
  image,
  isMarmitex,
  index
}: MenuItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="menu-card elegant-shadow group"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-restaurant-dark via-restaurant-dark/70 to-transparent z-10" />
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {isMarmitex && (
          <div className="absolute top-4 right-4 z-20 bg-restaurant-primary/90 text-restaurant-dark px-3 py-1 rounded-full text-sm font-semibold">
            Marmitex
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-semibold text-restaurant-primary mb-2">{name}</h3>
          <p className={cn(
            "text-xl font-bold",
            "gold-gradient-text"
          )}>
            {isMarmitex ? marmitexPrice : price}
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="pt-2 border-t border-restaurant-primary/20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-restaurant-primary text-sm font-medium hover:text-restaurant-primaryLight transition-colors"
          >
            Adicionar ao pedido
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
