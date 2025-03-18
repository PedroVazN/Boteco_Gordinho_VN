
import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import CategoryButton from './CategoryButton';

type Category = {
  name: string;
  icon: LucideIcon;
};

type RestaurantHeaderProps = {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Category[];
};

const RestaurantHeader = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  selectedCategory,
  setSelectedCategory,
  categories
}: RestaurantHeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled ? 'py-2 bg-restaurant-dark/95 backdrop-blur-sm' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="project/src/images/logo.png" 
              alt="Boteco do Gordinho"
              className="w-10 h-10 object-contain" 
            />
            <h1 className="text-xl font-cursive text-restaurant-primary">Boteco do Gordinho</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {categories.map((category) => (
              <CategoryButton 
                key={category.name}
                name={category.name}
                icon={category.icon}
                isSelected={selectedCategory === category.name}
                onClick={() => setSelectedCategory(category.name)}
              />
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-restaurant-dark border-t border-restaurant-primary/20 mt-2"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {categories.map((category) => (
                <CategoryButton 
                  key={category.name}
                  name={category.name}
                  icon={category.icon}
                  isSelected={selectedCategory === category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setIsMenuOpen(false);
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default RestaurantHeader;
