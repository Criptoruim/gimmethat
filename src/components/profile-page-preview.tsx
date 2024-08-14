import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../index.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'mtcv',
    memberSince: 'June 2023',
    country: 'Portugal',
    totalVotes: 127,
    productsAdded: 15,
    achievements: 7
  });

  const [activeTab, setActiveTab] = useState('voted');
  const [votedProducts, setVotedProducts] = useState([
    { id: 1, name: "Pastéis de Nata", country: "Portugal", votes: 5678 },
    { id: 2, name: "Maple Syrup", country: "Canada", votes: 3456 },
  ]);

  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Vegemite", country: "Australia", votes: 2345 },
    { id: 2, name: "Matcha Kit Kat", country: "Japan", votes: 4567 },
  ]);

  const [addedProducts, setAddedProducts] = useState([
    { id: 1, name: "Francesinha", country: "Portugal", votes: 1234 },
    { id: 2, name: "Port Wine", country: "Portugal", votes: 3210 },
  ]);

  return (
    <div className="container">
        <Header />
      <main className="main">
        <div className="profile-card">
          <div className="profile-info">
            <div className="avatar">{userInfo.username.charAt(0).toUpperCase()}</div>
            <div>
              <h2 className="username">{userInfo.username}</h2>
              <p className="user-country">📍 {userInfo.country}</p>
              <p className="member-since">🗓 Member since {userInfo.memberSince}</p>
            </div>
          </div>
          <button className="edit-button">✏️ Edit Profile</button>
          <div className="user-stats">
            <span>👍 <b>{userInfo.totalVotes}</b> Votes</span>
            <span>📦 <b>{userInfo.productsAdded}</b> Products</span>
            <span>🏆 <b>{userInfo.achievements}</b> Achievements</span>
          </div>
        </div>

        <div className="card-container">
          <div className="tabs-list">
            <button 
              className={activeTab === 'voted' ? 'tab-button active-tab' : 'tab-button'}
              onClick={() => setActiveTab('voted')}
            >
              Voted Products
            </button>
            <button 
              className={activeTab === 'wishlist' ? 'tab-button active-tab' : 'tab-button'}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </button>
            <button 
              className={activeTab === 'added' ? 'tab-button active-tab' : 'tab-button'}
              onClick={() => setActiveTab('added')}
            >
              Added Products
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'voted' && (
              <div>
                <h3 className="tab-title">Voted Products</h3>
                {votedProducts.map(product => (
                  <div key={product.id} className="product-item">
                    <div>
                      <p className="product-name">{product.name}</p>
                      <p className="product-country">{product.country}</p>
                    </div>
                    <div className="vote-count">❤️ {product.votes}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h3 className="tab-title">Wishlist</h3>
                {wishlist.map(product => (
                  <div key={product.id} className="product-item">
                    <div>
                      <p className="product-name">{product.name}</p>
                      <p className="product-country">{product.country}</p>
                    </div>
                    <div className="vote-count">❤️ {product.votes}</div>
                  </div>
                ))}
                <button className="add-button">➕ Add to Wishlist</button>
              </div>
            )}

            {activeTab === 'added' && (
              <div>
                <h3 className="tab-title">Added Products</h3>
                {addedProducts.map(product => (
                  <div key={product.id} className="product-item">
                    <div>
                      <p className="product-name">{product.name}</p>
                      <p className="product-country">{product.country}</p>
                    </div>
                    <div className="vote-count">❤️ {product.votes}</div>
                  </div>
                ))}
                <button className="add-button">➕ Add Global Favorite</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
