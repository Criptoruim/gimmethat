import React from 'react';
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

interface GlobalFavoritesProps {
  globalFavorites: Product[];
  handleVote: (item: Product, type: 'global' | 'wishlist') => void;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const GlobalFavorites: React.FC<GlobalFavoritesProps> = ({
  globalFavorites,
  handleVote,
  userProfile,
  setUserProfile
}) => {
  return (
    <div className="card-container">
      <h2 className="card-title">
        Global Favorites
        <span className="trending-badge">📈 Trending</span>
      </h2>
      <div className="card-content">
        {globalFavorites.map(item => (
          <div key={item.id} className="card">
            <img src={item.picture} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <p className="product-country">{item.country}</p>
              <div className="product-actions">
                <div className="vote-count">
                  ❤️ {item.votes}
                </div>
                <div>
                  <button
                    className={userProfile.votedProducts.includes(item.id) ? 'voted-button' : 'vote-button'}
                    onClick={() => handleVote(item, 'global')}
                    disabled={userProfile.votedProducts.includes(item.id)}
                  >
                    {userProfile.votedProducts.includes(item.id) ? 'Voted' : 'Vote'}
                  </button>
                  <button
                    className={userProfile.wishlistedProducts.includes(item.id) ? 'wishlisted-button' : 'add-wishlist-button'}
                    onClick={() => {
                      setUserProfile({
                        ...userProfile,
                        wishlistedProducts: [...userProfile.wishlistedProducts, item.id]
                      });
                    }}
                    disabled={userProfile.wishlistedProducts.includes(item.id)}
                  >
                    {userProfile.wishlistedProducts.includes(item.id) ? 'Wishlisted' : 'Add to Wishlist'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalFavorites;
