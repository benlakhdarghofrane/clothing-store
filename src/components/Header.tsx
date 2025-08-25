import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  onCategoryClick: (category: string) => void;
  cartItemsCount: number;
  onCartClick: () => void;
}

const categories = [
  'Robes',
  'Hauts', 
  'Pantalons',
  'Vestes & Manteaux',
  'Chaussures',
  'Accessoires',
  'Soldes'
];

const Header: React.FC<HeaderProps> = ({ onNavigate, onCategoryClick, cartItemsCount, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-black text-white text-center py-2 px-4">
        <p className="text-sm font-light">Livraison gratuite pour les commandes de plus de 8000 DZD</p>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-2xl font-bold tracking-wider">ÉLÉGANCE</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryClick(category)}
                className="text-gray-700 hover:text-black font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer transition-colors" />
            <button
              onClick={onCartClick}
              className="relative p-1"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryClick(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-black font-medium text-sm tracking-wide transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    onNavigate('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-left text-gray-700 hover:text-black font-medium text-sm tracking-wide transition-colors duration-200 mb-2"
                >
                  À propos
                </button>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-left text-gray-700 hover:text-black font-medium text-sm tracking-wide transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;