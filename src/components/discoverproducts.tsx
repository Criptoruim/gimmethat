import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'; // Import the CSS file

interface Product {
  id: number;
  name: string;
  description: string;
  country: string;
  votes: number;
  picture: string;  // This should be the filename or relative path
}

interface UserProfile {
  votedProducts: number[];
  wishlistedProducts: number[];
}

interface DiscoverProductsProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  handleVote: (item: Product, type: string) => void;
  userProfile: UserProfile;
  wishlistItems: Product[];
  globalFavorites: Product[];
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const DiscoverProducts: React.FC<DiscoverProductsProps> = ({
  selectedCategory,
  setSelectedCategory,
  handleVote,
  userProfile,
  wishlistItems,
  globalFavorites,
  setUserProfile
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://85.241.217.184:3001/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  // Base URL for images
  const imageBaseUrl = 'http://85.241.217.184:3001/uploads/';

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Discover Products</h2>
        <div className="filter-container">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">All Categories</option>
            <option value="food">Food</option>
            <option value="tech">Technology</option>
            <option value="fashion">Fashion</option>
          </select>
          <button className="filter-button">🔍 Filter</button>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">
          🌎 Top Wishlisted Products in Your Country
        </h2>
        <div className="card-content">
          {products.map(item => (
            <div key={item.id} className="card">
              <div className="card-content">
                <img 
                  src={item.picture ? `${imageBaseUrl}${item.picture}` : 'default-image.png'} 
                  alt={item.name} 
                  className="product-image" 
                />
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-description">{item.description || 'No description available'}</p>
                  <p className="product-country">{item.country}</p>
                  <div className="product-actions">
                    <div className="vote-count">
                      ❤️ {item.votes || 0}
                    </div>
                    <div>
                      <button
                        className={userProfile.votedProducts.includes(item.id) ? 'voted-button' : 'vote-button'}
                        onClick={() => handleVote(item, 'wishlist')}
                        disabled={userProfile.votedProducts.includes(item.id)}
                      >
                        {userProfile.votedProducts.includes(item.id) ? 'Voted' : 'Vote'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverProducts;
