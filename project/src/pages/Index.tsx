import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Fish, Phone, MessageSquare, MapPin, CreditCard, DollarSign, Package } from 'lucide-react';

import MenuItem from '@/components/MenuItem';
import CategoryButton from '@/components/CategoryButton';
import RestaurantHeader from '@/components/RestaurantHeader';
import ToggleButton from '@/components/ToggleButton';
import SectionHeader from '@/components/SectionHeader';
import InfoCard from '@/components/InfoCard';
import ContactButton from '@/components/ContactButton';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  marmitexPrice?: string;
};

function useIntersectionObserver(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos os Pratos');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMarmitex, setIsMarmitex] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(mainRef);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Picadinho',
      description: 'Tradicional picadinho de carne preparado com maestria',
      price: 'R$ 28,00',
      marmitexPrice: 'R$ 25,00',
      category: 'Todos os Pratos',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AB5caB8FPVrwAHKuUPkzyG7n19NW9KHTD5uLh1EZbBgpwTFO6G2hBleAywhCfr5-YOr_j7HzCTVSdPo79mEkmTpqqRgpUuiDnKxjh4ATDK4uQrciL_EjyEeMvymLzxojxiVkE41n1aF-hQ=s680-w680-h510'
    },
    {
      id: 2,
      name: 'Fígado Acebolado',
      description: 'Fígado grelhado com cebolas caramelizadas',
      price: 'R$ 28,00',
      marmitexPrice: 'R$ 25,00',
      category: 'Todos os Pratos',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMQlwVcDVkv0aPG2l9MrjWhHaBOb2QnK4-VfyU7=s680-w680-h510'
    },
    {
      id: 3,
      name: 'Bisteca Suína',
      description: 'Suculenta bisteca suína grelhada no ponto',
      price: 'R$ 28,00',
      marmitexPrice: 'R$ 25,00',
      category: 'Todos os Pratos',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AB5caB-_U6mOl5LT8H6Uq7XBOHZxmwLuEhJTfFXg5xGwPiPfZqwga-rsyOkwAzjJojcoKKhLRrRhsTnQYz7R_rwh39-0UGwLfMtWKJAi7PtnkPmlrpDM9DMIwqoweXvtQB-7hepo6lrv=s680-w680-h510'
    },
    {
      id: 4,
      name: 'Frango ao Molho',
      description: 'Peito de frango ao molho especial da casa',
      price: 'R$ 28,00',
      marmitexPrice: 'R$ 25,00',
      category: 'Todos os Pratos',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMgwF9jxQDgRHRsdI9pgG3ozL3tfUgf3lLyup3X=s680-w680-h510'
    },
    {
      id: 5,
      name: 'Filé de Frango',
      description: 'Filé de frango grelhado com temperos especiais',
      price: 'R$ 28,00',
      marmitexPrice: 'R$ 25,00',
      category: 'Todos os Pratos',
      image: 'https://receitatodahora.com.br/wp-content/uploads/2023/04/file-de-frango-18-04.jpg'
    },
    {
      id: 6,
      name: 'Linguiça',
      description: 'Linguiça artesanal grelhada',
      price: 'R$ 28,00',
      marmitexPrice: 'R$ 25,00',
      category: 'Todos os Pratos',
      image: 'https://static.itdg.com.br/images/1200-630/6b7a8a7b5ca95016f6d2d9cdb3051401/linguica-calabresa-acebolada.jpg'
    },
    {
      id: 7,
      name: 'Contra Filé',
      description: 'Contra filé grelhado no ponto de sua preferência',
      price: 'R$ 36,00',
      marmitexPrice: 'R$ 33,00',
      category: 'Todos os Pratos',
      image: 'https://topview.com.br/wp-content/uploads/2017/12/contra-file.jpg'
    },
    {
      id: 8,
      name: 'Omelete',
      description: 'Omelete fofinho com recheio especial',
      price: 'R$ 30,00',
      marmitexPrice: 'R$ 28,00',
      category: 'Todos os Pratos',
      image: 'https://receitanatureba.com/wp-content/uploads/2020/12/Omelete-de-Aveia.jpg'
    },
    {
      id: 9,
      name: 'Filé de Frango Empanado',
      description: 'Filé de frango empanado na farinha especial da casa',
      price: 'R$ 34,00',
      marmitexPrice: 'R$ 31,00',
      category: 'Todos os Pratos',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AB5caB_RndyszEgJnsEGM87h0JUhN8J0oA8oe9Gfuf5wa-AOgI_iI0lcLfnJ322J04ewSOx7bnvfeSXg4OkiRddFmu6aK8ab9BI1sXwVmNhDzdBl4PXyJ6XMfgNXjLMWeQAzsTtISn1k=s680-w680-h510'
    },
    {
      id: 10,
      name: 'Bife Empanado',
      description: 'Bife empanado crocante e suculento',
      price: 'R$ 39,00',
      marmitexPrice: 'R$ 36,00',
      category: 'Todos os Pratos',
      image: 'https://raquelicias.com.br/wp-content/uploads/2017/06/milanesa-gordelicias3.jpg'
    },
    {
      id: 11,
      name: 'Filé à Parmegiana de Frango',
      description: 'Clássico filé de frango à parmegiana com molho caseiro',
      price: 'R$ 40,00',
      marmitexPrice: 'R$ 37,00',
      category: 'À Parmegiana',
      image: 'https://receitatodahora.com.br/wp-content/uploads/2024/06/frango-a-parmegiana-1906.jpg'
    },
    {
      id: 12,
      name: 'Filé à Parmegiana de Carne',
      description: 'Tradicional filé à parmegiana com queijo gratinado',
      price: 'R$ 53,00',
      marmitexPrice: 'R$ 49,00',
      category: 'À Parmegiana',
      image: 'https://lh3.googleusercontent.com/p/AF1QipOmHEjwvesYITCYA76s-4pjr0TzoOv163besyji=s680-w680-h510'
    },
    {
      id: 13,
      name: 'Filé de Tilápia',
      description: 'Filé de tilápia grelhado com ervas',
      price: 'R$ 46,00',
      marmitexPrice: 'R$ 43,00',
      category: 'Peixes',
      image: 'https://www.minhareceita.com.br/app/uploads/2021/02/file-de-tilapia-grelhada-portal-minha-receita.jpg'
    },
    {
      id: 14,
      name: 'Filé de Tilápia Empanado',
      description: 'Filé de tilápia empanado crocante',
      price: 'R$ 38,00',
      marmitexPrice: 'R$ 35,00',
      category: 'Peixes',
      image: 'https://www.oliberal.com/image/contentid/policy:1.512441:1647872530/peixe-empanado-almoco-21-03.png?f=3x2&$p$f=a7ee74b'
    }
  ];

  const categories = [
    { name: 'Todos os Pratos', icon: UtensilsCrossed },
    { name: 'À Parmegiana', icon: Wine },
    { name: 'Peixes', icon: Fish }
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-restaurant-dark">
      {/* Header */}
      <RestaurantHeader 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-dark via-restaurant-dark/90 to-restaurant-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold gold-gradient-text mb-6"
            >
              Bem-vindo ao Boteco do Gordinho
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
            >
              Sabores autênticos e ambiente acolhedor para momentos especiais
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="elegant-button"
            >
              <span>Ver Cardápio</span>
            </motion.button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-restaurant-dark to-transparent" />
      </div>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-4 py-20">
        <SectionHeader title="Nosso Cardápio" />
        
        {/* Toggle between Restaurant and Marmitex */}
        <div className="flex justify-center mb-12">
          <motion.div 
            className="bg-restaurant-secondary p-1.5 rounded-full gold-border"
            whileHover={{ scale: 1.02 }}
          >
            <ToggleButton
              isActive={!isMarmitex}
              onClick={() => setIsMarmitex(false)}
              icon={UtensilsCrossed}
              label="Restaurante"
            />
            <ToggleButton
              isActive={isMarmitex}
              onClick={() => setIsMarmitex(true)}
              icon={Package}
              label="Marmitex"
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter(item => selectedCategory === 'Todos os Pratos' ? true : item.category === selectedCategory)
            .map((item, index) => (
              <MenuItem
                key={item.id}
                {...item}
                isMarmitex={isMarmitex}
                index={index}
              />
            ))}
        </div>
      </section>

      {/* Important Information Section */}
      <section className="bg-restaurant-secondary py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="Informações Importantes" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard
              title="Acompanhamentos Padrão"
              content={<p>ARROZ, FEIJÃO, SALADA, PURÊ OU FRITAS</p>}
              delay={1}
            />
            <InfoCard
              title="Acompanhamentos Parmegiana"
              content={<p>ARROZ, FRITAS E SALADA</p>}
              delay={2}
            />
            <InfoCard
              title="Divisão de Prato"
              content={<p>SERÁ COBRADO UMA TAXA EXTRA</p>}
              delay={3}
            />
            <InfoCard
              title="Formas de Pagamento"
              content={
                <div className="flex gap-4">
                  <span className="flex items-center gap-2">
                    <CreditCard size={20} className="text-restaurant-primary" />
                    Cartão
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign size={20} className="text-restaurant-primary" />
                    Dinheiro
                  </span>
                </div>
              }
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-restaurant-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="Como Chegar" />
          
          <div className="max-w-4xl mx-auto bg-restaurant-secondary rounded-lg overflow-hidden gold-border elegant-shadow fade-up">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0435820572686!2d-46.62238982374385!3d-23.601664178944193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc6cb3276f9%3A0x1c5cbc3c682a7fa4!2sR.%20Itapiru%2C%20298%20-%20Vila%20da%20Sa%C3%BAde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004143-010!5e0!3m2!1sen!2sbr!4v1709764532346!5m2!1sen!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-restaurant-primary mb-2">
                <MapPin size={24} />
                <h3 className="text-xl font-serif font-semibold">Nosso Endereço</h3>
              </div>
              <p className="text-gray-300">R. Itapiru, 298 - Vila da Saúde</p>
              <p className="text-gray-300">São Paulo - SP, 13320-030</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-restaurant-secondary py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="Entre em Contato" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContactButton 
              href="tel:+5511987468798"
              icon={Phone}
              title="Faça seu Pedido"
              description="Ligue para (11) 98746-8798"
            />
            <ContactButton 
              href="https://wa.me/5511987468798"
              icon={MessageSquare}
              title="WhatsApp"
              description="Envie uma mensagem"
              external
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-restaurant-dark text-white py-10 border-t border-restaurant-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src="project/src/images/logo.png" 
              alt="Boteco do Gordinho"
              className="w-16 h-16 object-contain" 
            />
            <div>
              <h2 className="text-2xl font-cursive text-restaurant-primary">Boteco do Gordinho</h2>
              <p className="text-xs text-gray-400">Desde 2020</p>
            </div>
          </div>
          <div className="h-px w-24 bg-restaurant-primary/30 mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm">© 2024 Boteco do Gordinho - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
