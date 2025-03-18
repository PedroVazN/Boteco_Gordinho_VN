
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';

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
  const currentPrice = isMarmitex ? marmitexPrice : price;
  
  const handleWhatsAppOrder = () => {
    const orderType = isMarmitex ? "marmitex de" : "";
    const message = `Boa tarde, gostaria de pedir um ${orderType} ${name}, de ${currentPrice}, tem disponível?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/11987468798?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="menu-card shadow-lg shadow-restaurant-primary/10 group"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-restaurant-dark via-restaurant-dark/70 to-transparent z-10" />
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {isMarmitex && (
          <div className="absolute top-4 right-4 z-20 bg-restaurant-accent/90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            Marmitex
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-semibold text-restaurant-primary mb-1">{name}</h3>
          <div className="bg-restaurant-primary/10 rounded-full px-4 py-1">
            <p className={cn(
              "text-xl font-bold",
              "text-restaurant-accent"
            )}>
              {currentPrice}
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        <button 
          onClick={handleWhatsAppOrder}
          className="w-full py-2 px-4 bg-restaurant-accent hover:bg-restaurant-accentLight text-white rounded-md flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
        >
          <MessageSquare size={18} />
          <span>Pedir via WhatsApp</span>
        </button>
      </div>
    </motion.div>
  );
};

export default MenuItem;
