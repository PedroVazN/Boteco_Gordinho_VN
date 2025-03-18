
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

type MenuItemProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  marmitexPrice?: string;
  isMarmitex?: boolean;
  index: number;
};

const MenuItem = ({ 
  name, 
  description, 
  price, 
  image, 
  marmitexPrice, 
  isMarmitex, 
  index 
}: MenuItemProps) => {
  // Function to create WhatsApp order URL with encoded message
  const createWhatsAppOrderURL = () => {
    const displayPrice = isMarmitex && marmitexPrice ? marmitexPrice : price;
    const productType = isMarmitex ? 'marmitex de' : '';
    const message = `Boa Tarde, gostaria de pedir um ${productType} ${name}, de ${displayPrice}, tem disponível?`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API URL with phone number and encoded message
    return `https://wa.me/5511987468798?text=${encodedMessage}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-restaurant-secondary rounded-lg overflow-hidden gold-border elegant-shadow fade-up hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-serif font-semibold text-white">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-restaurant-primary font-semibold">
            {isMarmitex && marmitexPrice ? marmitexPrice : price}
          </span>
          <a 
            href={createWhatsAppOrderURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full transition-colors text-sm"
          >
            <MessageSquare size={18} />
            <span>Pedir agora</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
