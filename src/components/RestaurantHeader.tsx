
import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Fish, Menu, ChevronDown } from 'lucide-react';
import CategoryButton from './CategoryButton';
import { cn } from '@/lib/utils';

type Category = {
  name: string;
  icon: any;
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed w-full z-50 transition-all duration-500",
          isScrolled ? "bg-restaurant-dark/95 backdrop-blur-md border-b border-restaurant-primary/20 py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <img 
                src="https://github.com/PedroVazN/Boteco-do-Gordinho/blob/main/project/src/images/logo.png?raw=true" 
                alt="Boteco do Gordinho"
                className="w-16 h-16 object-contain" 
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-cursive text-restaurant-primary">Boteco do Gordinho</h1>
                <p className="text-xs text-gray-400">Sabor & Tradição</p>
              </div>
            </motion.div>
            <div className="hidden md:flex gap-4">
              {categories.map((category, index) => (
                <CategoryButton
                  key={category.name}
                  name={category.name}
                  icon={category.icon}
                  isActive={selectedCategory === category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  index={index}
                />
              ))}
            </div>
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-restaurant-primary flex items-center gap-2"
            >
              <span className="text-sm text-gray-300">Menu</span>
              <ChevronDown size={18} className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed w-full bg-restaurant-dark border-b border-restaurant-primary/20 z-40 transition-all duration-300",
        isMenuOpen ? "top-[76px]" : "-top-full"
      )}>
        <div className="container mx-auto">
          {categories.map((category) => (
            <CategoryButton
              key={category.name}
              name={category.name}
              icon={category.icon}
              isActive={selectedCategory === category.name}
              onClick={() => {
                setSelectedCategory(category.name);
                setIsMenuOpen(false);
              }}
              isMobile
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;
