import React, { useState } from 'react';
import axios from 'axios';  // Ensure you have axios installed
import AddProduct from './addProduct';
import '../index.css';

interface Product {
  id: number;
  name: string;
  description: string;
  country: string;
  votes: number;
  picture: string;
}

interface UserProfile {
  votedProducts: number[];
  wishlistedProducts: number[];
}

interface DiscoverSectionProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleVote: (item: Product, type: string) => void;
  userProfile: UserProfile;
  wishlistItems: Product[];
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  searchQuery,
  setSearchQuery,
  handleVote,
  userProfile,
  wishlistItems,
  setUserProfile
}) => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [addingTo, setAddingTo] = useState('');

  const handleAddProduct = async (name: string, description: string, country: string) => {
    const newProduct: Product = {
      id: Date.now(), // You may want to replace this with a proper ID generation method
      name,
      description,
      country,
      votes: 0,
      picture: ''
    };

    try {
      const response = await axios.post('http://localhost:3001/api/products', newProduct);
      console.log('Product added:', response.data);
      // Update your state or perform additional actions here
    } catch (error) {
      console.error('Error adding product:', error);
    }

    setShowAddProduct(false);
  };

  const handleCancel = () => {
    setShowAddProduct(false);
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="intro-text">
          Discover popular products from different countries. Vote for items you wish were available in
          your country and share your local favorites with the world.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products or countries"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="action-buttons">
          <button
            className="add-product-button"
            onClick={() => { setShowAddProduct(true); setAddingTo('globalFavorites'); }}
          >
            ➕ Add Product I Love
          </button>
          <button
            className="add-wishlist-button"
            onClick={() => { setShowAddProduct(true); setAddingTo('wishlist'); }}
          >
            ❤️ Add to Wishlist
          </button>
        </div>
      </div>

      {showAddProduct && (
        <AddProduct
          addingTo={addingTo}
          onAddProduct={handleAddProduct}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default DiscoverSection;
