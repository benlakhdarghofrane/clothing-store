import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">Contactez-nous</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter pour toute question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light mb-8">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="commande">Question sur une commande</option>
                  <option value="produit">Information produit</option>
                  <option value="retour">Retour/Échange</option>
                  <option value="taille">Guide des tailles</option>
                  <option value="livraison">Livraison</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-vertical"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 font-medium tracking-wide hover:bg-gray-800 transition-colors"
              >
                ENVOYER LE MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-8">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-600">+213 770 123 456</p>
                    <p className="text-sm text-gray-500">Lun-Ven: 9h-18h | Sam: 9h-15h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">contact@elegance-dz.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue Didouche Mourad<br />
                      16000 Alger, Algérie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Horaires</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 18h00</p>
                      <p>Samedi: 9h00 - 15h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-light mb-6">Suivez-nous</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/+213770123456"
                  className="flex items-center space-x-4 p-4 border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-green-600">WhatsApp</div>
                    <div className="text-sm text-gray-600">Chat direct avec notre équipe</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/elegance_dz"
                  className="flex items-center space-x-4 p-4 border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-pink-600">Instagram</div>
                    <div className="text-sm text-gray-600">@elegance_dz</div>
                  </div>
                </a>

                <a
                  href="https://facebook.com/elegancedz"
                  className="flex items-center space-x-4 p-4 border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-blue-600">Facebook</div>
                    <div className="text-sm text-gray-600">Élégance Algérie</div>
                  </div>
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Questions fréquentes</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                  • Comment passer une commande ?
                </a>
                <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                  • Quels sont les modes de paiement ?
                </a>
                <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                  • Comment retourner un article ?
                </a>
                <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                  • Guide des tailles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;