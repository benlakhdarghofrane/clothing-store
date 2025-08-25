import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-wider mb-6">ÉLÉGANCE</h2>
            <p className="text-gray-300 font-light leading-relaxed mb-6">
              Votre destination mode féminine en Algérie. Des collections inspirées par l'élégance moderne 
              et la sophistication intemporelle.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/elegance_dz"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/elegancedz"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/+213770123456"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-medium mb-6">Boutique</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Robes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Hauts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Pantalons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Vestes & Manteaux
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Chaussures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Accessoires
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light text-red-400">
                  Soldes
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-6">Service Client</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Mon compte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Suivi de commande
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Guide des tailles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Livraison & Retours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors font-light">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="font-light text-sm">
                  123 Avenue Didouche Mourad<br />
                  16000 Alger, Algérie
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="font-light text-sm">+213 770 123 456</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="font-light text-sm">contact@elegance-dz.com</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-light text-gray-400 mb-3">
                Horaires d'ouverture:
              </p>
              <div className="text-sm text-gray-300 font-light">
                <p>Lun-Ven: 9h-18h</p>
                <p>Samedi: 9h-15h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-xl font-light mb-4">Restez informée</h3>
            <p className="text-gray-300 font-light mb-6 max-w-md mx-auto">
              Inscrivez-vous à notre newsletter et recevez en exclusivité nos dernières collections et offres spéciales.
            </p>
            
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                S'INSCRIRE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 font-light text-center md:text-left">
              <p>&copy; 2025 ÉLÉGANCE. Tous droits réservés.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors font-light">
                Conditions générales
              </a>
              <a href="#" className="hover:text-white transition-colors font-light">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors font-light">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors font-light">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4 z-30 md:hidden">
        <div className="flex justify-around">
          <a
            href="https://wa.me/+213770123456"
            className="flex flex-col items-center space-y-1 text-green-400 hover:text-green-300 transition-colors"
          >
            <MessageCircle size={20} />
            <span className="text-xs">WhatsApp</span>
          </a>
          <a
            href="tel:+213770123456"
            className="flex flex-col items-center space-y-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Phone size={20} />
            <span className="text-xs">Appeler</span>
          </a>
          <a
            href="mailto:contact@elegance-dz.com"
            className="flex flex-col items-center space-y-1 text-red-400 hover:text-red-300 transition-colors"
          >
            <Mail size={20} />
            <span className="text-xs">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;