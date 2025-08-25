import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../App';

interface HomePageProps {
  onCategoryClick: (category: string) => void;
  onProductClick: (product: Product) => void;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Robe Midi Élégante",
    price: 4500,
    originalPrice: 6000,
    images: [
      "https://i.pinimg.com/1200x/b4/7c/ef/b47cef240b2f93f5584b385a5bbe2125.jpg",
      "https://i.pinimg.com/1200x/0e/c3/56/0ec3560beeaa406420d9aa2ac68bc534.jpg"
    ],
    category: "Robes",
    description: "Robe midi élégante parfaite pour toutes occasions",
    sizes: ["XS", "S", "M", "L", "XL"],
    isOnSale: true
  },
  {
    id: 2,
    name: "Blazer Moderne",
    price: 7200,
    images: [
      "https://i.pinimg.com/1200x/22/fd/91/22fd917c051b72f942c043b2c54e2575.jpg",
      "https://i.pinimg.com/736x/17/1b/24/171b24652e52b9b46ba9373ec4ff5dcd.jpg"
    ],
    category: "Vestes & Manteaux",
    description: "Blazer moderne et sophistiqué",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Pantalon Tailleur",
    price: 3800,
    images: [
      "https://i.pinimg.com/736x/b8/30/d2/b830d22ceda694d76e675949d43a7e4e.jpg",
      "https://i.pinimg.com/1200x/15/a4/f5/15a4f50155c90b3202815a14dc4ccbc2.jpg"
    ],
    category: "Pantalons",
    description: "Pantalon tailleur chic et confortable",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Top Soyeux",
    price: 2900,
    images: [
      "https://i.pinimg.com/1200x/63/42/dd/6342dd467a5acc42494c3301c46d3e5c.jpg",
      "https://i.pinimg.com/736x/7a/fd/fa/7afdfabcfbbabfb958e68057c8693543.jpg"
    ],
    category: "Hauts",
    description: "Top en soie délicate et raffinée",
    sizes: ["XS", "S", "M", "L", "XL"]
  }
];

const HomePage: React.FC<HomePageProps> = ({ onCategoryClick, onProductClick }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/d8/62/98/d8629843afd138005609b2103850ba58.jpg"
            alt="Collection Automne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
              NOUVELLE COLLECTION
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 font-light">
              Découvrez l'élégance moderne avec notre collection automne-hiver
            </p>
            <button
              onClick={() => onCategoryClick('')}
              className="bg-white text-black px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
            >
              DÉCOUVRIR
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Nos Collections</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Des pièces soigneusement sélectionnées pour révéler votre élégance naturelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Robes',
                image: 'https://i.pinimg.com/1200x/d9/c2/2d/d9c22d07d1f0ede065602d8cb3bbb06d.jpg',
                description: 'Élégance intemporelle'
              },
              {
                name: 'Vestes & Manteaux',
                image: 'https://i.pinimg.com/736x/1b/78/6f/1b786f7d4b571733fb1ea977b954f54c.jpg',
                description: 'Sophistication moderne'
              },
              {
                name: 'Accessoires',
                image: 'https://i.pinimg.com/1200x/74/e0/38/74e03854496edc73026818652f2ce4a3.jpg',
                description: 'Détails qui font la différence'
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => onCategoryClick(category.name)}
              >
                <div className="relative overflow-hidden bg-white rounded-sm shadow-sm">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                    <p className="text-gray-600 font-light text-sm mb-4">{category.description}</p>
                    <button className="inline-flex items-center text-sm font-medium group-hover:text-black transition-colors">
                      Découvrir <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Coups de Cœur</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Nos pièces favorites, sélectionnées avec soin pour leur style unique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <div className="relative overflow-hidden bg-white rounded-sm">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {product.isOnSale && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-medium">
                      SOLDE
                    </div>
                  )}
                </div>
                
                <div className="pt-4 text-center">
                  <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-medium">{product.price} DZD</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice} DZD
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Restez Connectée
          </h2>
          <p className="text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter et soyez la première à découvrir nos nouvelles collections
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 text-black text-sm focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                S'INSCRIRE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;