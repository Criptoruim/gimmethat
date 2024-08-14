import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  // Import the CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="main section-header">
        <Link to="/">
          <h1 className="header-title">GimmeThat</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            <ul>Home</ul>
          </Link>
          <Link to="/about" className="nav-link">
            <ul>About</ul>
          </Link>
          <Link to="/profile" className="nav-link">
            <ul>Profile</ul>
          </Link>
          <Link to="/signout" className="nav-link">
            <ul>Sign Out</ul>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
