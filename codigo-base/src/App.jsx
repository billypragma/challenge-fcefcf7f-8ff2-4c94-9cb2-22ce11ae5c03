import { useMemo, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import CartIcon from './components/CartIcon.jsx';
import SearchBar from './components/SearchBar.jsx';
import FilterOptions from './components/FilterOptions/FilterOptions.jsx';
import { products, filterCategories } from './data/products.js';
import { ToastProvider } from './components/Toast.jsx';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [query, setQuery] = useState('');

  const visibleProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === 'todos' || p.category === activeCategory;
      const matchesQuery = p.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <ToastProvider> 
    <div className="app">
      <header className="app__header">
        <h1>Tienda VTEX</h1>
        <SearchBar onSearch={setQuery} />
        <CartIcon itemCount={cartCount} />
      </header>

      <FilterOptions
        categories={filterCategories}
        active={activeCategory}
        onSelect={setActiveCategory}
      />

      <main className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => setCartCount((c) => c + 1)}
          />
        ))}
      </main>
    </div>
    </ToastProvider>
  );
}
