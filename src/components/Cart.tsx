import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, size: string, newQuantity: number) => void;
  onRemoveItem: (productId: number, size: string) => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 8000 ? 0 : 500;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Slide Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Panier ({items.length})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <ShoppingBag size={48} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Votre panier est vide
                </h3>
                <p className="text-gray-500 mb-6">
                  Ajoutez quelques articles pour commencer
                </p>
                <button
                  onClick={onClose}
                  className="bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
                >
                  CONTINUER VOS ACHATS
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex space-x-4">
                    <div className="w-20 h-24 flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Taille: {item.size}
                      </p>
                      <p className="text-sm font-medium">
                        {item.product.price} DZD
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-2 text-sm border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.size)}
                          className="text-sm text-red-500 hover:text-red-700 transition-colors"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal} DZD</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{shipping === 0 ? 'Gratuite' : `${shipping} DZD`}</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>{total} DZD</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
                COMMANDER - {total} DZD
              </button>

              <p className="text-xs text-gray-500 text-center">
                {subtotal < 8000 && `Ajoutez ${8000 - subtotal} DZD pour la livraison gratuite`}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;