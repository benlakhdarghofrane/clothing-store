import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { Product } from '../App';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    onAddToCart(product, selectedSize, quantity);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
            
            {/* Thumbnail navigation */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 border-2 ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  } transition-colors`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light tracking-wide mb-2">{product.name}</h1>
              <p className="text-gray-600 text-sm uppercase tracking-wider">{product.category}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-medium">{product.price} DZD</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice} DZD
                  </span>
                )}
              </div>
              {product.isOnSale && (
                <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium">
                  SOLDE
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Taille</h3>
                <button className="text-sm text-gray-600 underline hover:text-black">
                  Guide des tailles
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border text-center transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantité</h3>
              <div className="flex items-center border border-gray-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 border-x border-gray-300 text-center flex-1">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 font-medium tracking-wide hover:bg-gray-800 transition-colors"
              >
                AJOUTER AU PANIER
              </button>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 border py-3 text-center transition-colors ${
                    isWishlisted
                      ? 'border-red-500 text-red-500'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  <Heart
                    size={18}
                    className={`inline mr-2 ${isWishlisted ? 'fill-current' : ''}`}
                  />
                  {isWishlisted ? 'Ajouté' : 'Favoris'}
                </button>
                <button className="flex-1 border border-gray-300 py-3 text-center hover:border-black transition-colors">
                  <Share2 size={18} className="inline mr-2" />
                  Partager
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck size={20} className="text-gray-600" />
                <span className="text-sm">Livraison gratuite à partir de 8000 DZD</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw size={20} className="text-gray-600" />
                <span className="text-sm">Retours gratuits sous 30 jours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-gray-600" />
                <span className="text-sm">Paiement sécurisé</span>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-medium mb-3">Entretien</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lavage en machine à 30°C</li>
                <li>• Ne pas utiliser d'eau de javel</li>
                <li>• Séchage à plat</li>
                <li>• Repassage à température moyenne</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-2xl font-light tracking-wide mb-8">Vous aimerez aussi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-w-3 aspect-h-4 bg-gray-100 mb-4">
                  <img
                    src={`https://i.pinimg.com/1200x/b4/7c/ef/b47cef240b2f93f5584b385a5bbe2125.jpg`}
                    alt="Produit similaire"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-medium mb-1">Produit Similaire {i}</h3>
                <p className="text-gray-600">3500 DZD</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;