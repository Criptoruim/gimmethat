import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Explore from './components/explore-page-preview';
import Leaderboard from './components/combined-leaderboard-page';
import Product from './components/product-detail-preview';
import Footer from './components/footer';
import Header from './components/header';
import ProfilePage from './components/profile-page-preview';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-page-preview" element={<Explore />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path='/header' element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
