import React, { useState, useEffect } from 'react';
import '../index.css';  // Adjust the import path as needed

type Product = {
  id: number;
  name: string;
  country: string;
  votes: number;
  image: string;
};

type Collection = {
  id: number;
  name: string;
  user: string;
  products: number;
};

const ExplorePage: React.FC = () => {
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [popularCategories, setPopularCategories] = useState<string[]>([]);
  const [userCollections, setUserCollections] = useState<Collection[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const mockGlobalFavorites: Product[] = [
      { id: 1, name: "Eco-Friendly Water Bottle", country: "USA", votes: 1250, image: "/api/placeholder/100/100" },
      { id: 2, name: "Smart Home Hub", country: "Japan", votes: 980, image: "/api/placeholder/100/100" },
      { id: 3, name: "Organic Cotton T-Shirt", country: "India", votes: 875, image: "/api/placeholder/100/100" },
      { id: 4, name: "Wireless Earbuds", country: "China", votes: 750, image: "/api/placeholder/100/100" },
      { id: 5, name: "Sustainable Backpack", country: "Germany", votes: 620, image: "/api/placeholder/100/100" },
    ];

    setTrendingProducts(mockGlobalFavorites.sort((a, b) => b.votes - a.votes).slice(0, 5));
    setPopularCategories(['Food', 'Technology', 'Fashion', 'Home', 'Beauty']);
    setUserCollections([
      { id: 1, name: "Summer Essentials", user: "TravelLover", products: 15 },
      { id: 2, name: "Tech Gadgets 2023", user: "GadgetGuru", products: 23 },
      { id: 3, name: "Eco-Friendly Finds", user: "EcoWarrior", products: 18 },
    ]);
  }, []);

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="card">
      <div className="card-content">
        <img src={product.image} alt={product.name} className="product-image" />
        <div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-country">{product.country}</p>
          <p className="product-votes">Votes: {product.votes}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="header">
        🧭 Explore
      </h1>

      <div className="search-section">
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Search products or collections" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input"
          />
          <button className="button">🔍</button>
        </div>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select"
        >
          <option value="all">All Categories</option>
          {popularCategories.map(category => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))}
        </select>
      </div>

      <div className="card">
        <h2 className="card-title">📈 Trending Products</h2>
        <div>
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">📊 Popular Categories</h2>
        <div className="category-buttons">
          {popularCategories.map(category => (
            <button key={category} className="category-button">{category}</button>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">👥 User Collections</h2>
        <div>
          {userCollections.map(collection => (
            <div key={collection.id} className="collection-card">
              <h3 className="collection-name">{collection.name}</h3>
              <p className="collection-user">By {collection.user}</p>
              <p className="collection-products">{collection.products} products</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
