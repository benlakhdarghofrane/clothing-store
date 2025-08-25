import React from 'react';
import { Product } from '../App';

interface ProductGridProps {
  category: string;
  onProductClick: (product: Product) => void;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Robe Midi Élégante",
    price: 4500,
    originalPrice: 6000,
    images: [
      "https://i.pinimg.com/1200x/a9/84/f5/a984f544a2334298154e016b1a9e5532.jpg",
      "https://fashionlaura.com/cdn/shop/files/B1709964503978_fe871be3-974e-4e6e-b437-19585701843d.jpg?v=1723281230&width=990"
    ],
    category: "Robes",
    description: "Robe midi élégante en crêpe fluide, parfaite pour les occasions spéciales. Coupe moderne et féminine.",
    sizes: ["XS", "S", "M", "L", "XL"],
    isOnSale: true
  },
  {
    id: 2,
    name: "Blazer Moderne",
    price: 7200,
    images: [
      "https://i.pinimg.com/736x/42/db/ce/42dbcec69e60fe7b663509f5484130b5.jpg",
      "https://i.pinimg.com/736x/39/3d/2d/393d2d330c5585232fdc95953c6c468b.jpg"
    ],
    category: "Vestes & Manteaux",
    description: "Blazer moderne en laine mélangée, coupe droite et structurée. Parfait pour un look professionnel.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Pantalon Tailleur",
    price: 3800,
    images: [
      "https://i.pinimg.com/1200x/aa/09/df/aa09dfdd28d99fa16ffa75b9cb8599eb.jpg",
      "https://i.pinimg.com/1200x/b6/61/a8/b661a83ca9e8282d68de95d14ca7e814.jpg"
    ],
    category: "Pantalons",
    description: "Pantalon tailleur en tissu stretch, coupe droite et confortable. Idéal pour le bureau.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Top Soyeux",
    price: 2900,
    images: [
      "https://i.pinimg.com/1200x/12/ee/06/12ee06aafc4f3887bc9c7cd63ede057b.jpg",
      "https://img.fantaskycdn.com/watermark2ad5e5c40af5af826a75be6fb24657d0_750x.jpeg"
    ],
    category: "Hauts",
    description: "Blouse en soie naturelle, coupe fluide et élégante. Parfaite pour un look sophistiqué.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Robe Cocktail",
    price: 8500,
    images: [
      "https://i.pinimg.com/1200x/26/cb/8a/26cb8a41eb7d10a2cb59ad597e8f6228.jpg",
      "https://i.pinimg.com/1200x/54/67/a2/5467a25b2243a2eb0a79e9256de42c3b.jpg"
    ],
    category: "Robes",
    description: "Robe cocktail en dentelle délicate, coupe près du corps. Idéale pour les événements spéciaux.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Chemisier Classique",
    price: 3200,
    images: [
      "https://i.pinimg.com/1200x/1b/c4/28/1bc428a0f34c703d4d148e76e1478f07.jpg",
      "https://i.pinimg.com/1200x/a9/8e/d3/a98ed398f73b9f0b03365be783bc4114.jpg"
    ],
    category: "Hauts",
    description: "Chemisier classique en coton premium, coupe ajustée et col italien. Un incontournable.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Jean  Taille Haute",
    price: 4200,
    originalPrice: 5500,
    images: [
      "https://i.pinimg.com/1200x/bc/27/a1/bc27a1e218c5595a05610b14fbd9f6eb.jpg",
      "https://i.pinimg.com/1200x/75/fa/1c/75fa1cf0883ae5391879e7ea5c7ce5fc.jpg"
    ],
    category: "Pantalons",
    description: "Jean  taille haute en denim stretch, coupe moderne et flatteuse. Confort optimal.",
    sizes: ["XS", "S", "M", "L", "XL"],
    isOnSale: true
  },
  {
    id: 8,
    name: "Manteau Long",
    price: 12000,
    images: [
      "https://i.pinimg.com/1200x/fd/9e/f6/fd9ef66c6e3e243d4ecbcb7b0134e005.jpg",
      "https://i.pinimg.com/1200x/9a/ef/6b/9aef6b84f252d7c25e798d7139198c9f.jpg"
    ],
    category: "Vestes & Manteaux",
    description: "Manteau long en laine cachemire, coupe cintrée et col revers. Élégance absolue.",
    sizes: ["XS", "S", "M", "L", "XL"]
  }
];

const ProductGrid: React.FC<ProductGridProps> = ({ category, onProductClick }) => {
  const filteredProducts = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            {category || 'Toutes nos Collections'}
          </h1>
          <p className="text-gray-600 font-light">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-8 border-b border-gray-200 pb-6">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <select className="border border-gray-300 rounded-none px-4 py-2 text-sm focus:outline-none focus:border-black">
              <option>Trier par</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
            <select className="border border-gray-300 rounded-none px-4 py-2 text-sm focus:outline-none focus:border-black">
              <option>Taille</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <select className="border border-gray-300 rounded-none px-4 py-2 text-sm focus:outline-none focus:border-black">
              <option>Prix</option>
              <option>Moins de 3000 DZD</option>
              <option>3000 - 6000 DZD</option>
              <option>6000 - 10000 DZD</option>
              <option>Plus de 10000 DZD</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-300 hover:border-black transition-colors">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-current"></div>
                ))}
              </div>
            </button>
            <button className="p-2 border border-gray-300 hover:border-black transition-colors">
              <div className="grid grid-cols-2 gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-current"></div>
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-white">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    className="w-full h-80 object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                
                {product.isOnSale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-medium">
                    SOLDE
                  </div>
                )}

                {/* Quick add button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="w-full bg-white text-black py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductClick(product);
                    }}
                  >
                    APERÇU RAPIDE
                  </button>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium">{product.price} DZD</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice} DZD
                    </span>
                  )}
                </div>
                
                {/* Size indicators */}
                <div className="flex items-center mt-2 space-x-1">
                  {product.sizes.slice(0, 5).map((size) => (
                    <span 
                      key={size} 
                      className="text-xs text-gray-500 border border-gray-200 px-1 py-0.5"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
            VOIR PLUS DE PRODUITS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;