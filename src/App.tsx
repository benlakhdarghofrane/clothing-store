import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  sizes: string[];
  isOnSale?: boolean;
};

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, size: string, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id && item.size === size);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, size, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateCartItemQuantity = (productId: number, size: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (productId: number, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('products');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onCategoryClick={handleCategoryClick} onProductClick={handleProductClick} />;
      case 'products':
        return <ProductGrid category={selectedCategory} onProductClick={handleProductClick} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onBack={() => setCurrentPage('products')}
          />
        ) : null;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage onCategoryClick={handleCategoryClick} onProductClick={handleProductClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={setCurrentPage}
        onCategoryClick={handleCategoryClick}
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;