
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

const ContactButton = ({ href, icon: Icon, title, description, external }: ContactButtonProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 bg-restaurant-dark p-6 rounded-lg gold-border elegant-shadow fade-up"
    >
      <div className="bg-restaurant-primary/20 rounded-full p-3 text-restaurant-primary">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-xl font-serif font-semibold text-restaurant-primary">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.a>
  );
};

export default ContactButton;
