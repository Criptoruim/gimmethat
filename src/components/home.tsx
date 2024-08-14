import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import DiscoverSection from './discoversection';
import DiscoverProducts from './discoverproducts';
import GlobalFavorites from './globalfavorites';
import '../index.css';  

// Define the Product and UserProfile interfaces
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

// Home component
const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [globalFavorites, setGlobalFavorites] = useState<Product[]>([
    { id: 1, name: "Pastéis de Nata", description: "Portuguese Custard Tarts", country: "Portugal", votes: 5678, picture: "/api/placeholder/100/100" }
  ]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([
    { id: 1, name: "Maple Syrup", description: "Sweet tree sap", country: "Canada", votes: 3456, picture: "/api/placeholder/100/100" },
    { id: 2, name: "Vegemite", description: "Yeast extract spread", country: "Australia", votes: 2345, picture: "/api/placeholder/100/100" }
  ]);
  const [userProfile, setUserProfile] = useState<UserProfile>({ votedProducts: [], wishlistedProducts: [] });

  // Handle voting
  const handleVote = (item: Product, type: string) => {
    if (userProfile.votedProducts.includes(item.id)) {
      // Optionally show a message or handle the case where the user has already voted
      return;
    }

    if (type === 'global') {
      setGlobalFavorites(globalFavorites.map(fav =>
        fav.id === item.id ? { ...fav, votes: fav.votes + 1 } : fav
      ));
    } else {
      setWishlistItems(wishlistItems.map(wish =>
        wish.id === item.id ? { ...wish, votes: wish.votes + 1 } : wish
      ));
    }
    setUserProfile({
      ...userProfile,
      votedProducts: [...userProfile.votedProducts, item.id]
    });
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <DiscoverSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleVote={handleVote}
          userProfile={userProfile}
          wishlistItems={wishlistItems}
          setUserProfile={setUserProfile}
        />
        <DiscoverProducts
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleVote={handleVote}
          userProfile={userProfile}
          wishlistItems={wishlistItems}
          globalFavorites={globalFavorites}
          setUserProfile={setUserProfile}
        />
        <GlobalFavorites
          globalFavorites={globalFavorites}
          handleVote={handleVote}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
