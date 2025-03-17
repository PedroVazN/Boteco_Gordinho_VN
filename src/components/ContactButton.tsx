
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type ContactButtonProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  external?: boolean;
};

const ContactButton = ({ href, icon: Icon, title, description, external = false }: ContactButtonProps) => {
  return (
    <motion.a 
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-5 bg-restaurant-secondary p-6 rounded-lg border border-restaurant-primary/20 shadow-lg shadow-restaurant-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-restaurant-primary/20 group"
    >
      <div className="p-3 bg-restaurant-dark rounded-full group-hover:bg-restaurant-accent/10 transition-colors duration-300">
        <Icon size={28} className="text-restaurant-accent" />
      </div>
      <div className="text-left">
        <h3 className="text-xl font-serif font-semibold text-restaurant-primary mb-1">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </motion.a>
  );
};

export default ContactButton;
