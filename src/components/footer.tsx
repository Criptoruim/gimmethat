import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="topBand">
        <div className="topBandContent">
          <h3 className="topBandTitle">Explore</h3>
          <h3 className="topBandTitle">Community</h3>
          <h3 className="topBandTitle">Support</h3>
        </div>
      </div>
      <div className="mainContent">
        <div className="logoSection">
          <h2 className="logo">GimmeThat</h2>
          <p className="tagline">Discover the world, one product at a time</p>
        </div>
        <div className="linksSection">
          <div className="footerColumn">
            <ul className="linkList">
              <li><a href="/products" className="link">All Products</a></li>
              <li><a href="/categories" className="link">Categories</a></li>
              <li><a href="/countries" className="link">Countries</a></li>
              <li><a href="/leaderboard" className="link">Leaderboard</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <ul className="linkList">
              <li><a href="/challenges" className="link">Challenges</a></li>
              <li><a href="/badges" className="link">Badges</a></li>
              <li><a href="/blog" className="link">Blog</a></li>
              <li><a href="/forum" className="link">Forum</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <ul className="linkList">
              <li><a href="/faq" className="link">FAQ</a></li>
              <li><a href="/contact" className="link">Contact Us</a></li>
              <li><a href="/help" className="link">Help Center</a></li>
              <li><a href="/report" className="link">Report an Issue</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="socialLinks">
          <a href="https://facebook.com" className="socialLink">Facebook</a>
          <a href="https://twitter.com" className="socialLink">Twitter</a>
          <a href="https://instagram.com" className="socialLink">Instagram</a>
          <a href="https://youtube.com" className="socialLink">YouTube</a>
        </div>
        <div className="legalLinks">
          <a href="/terms" className="legalLink">Terms of Service</a>
          <span className="legalSeparator">|</span>
          <a href="/privacy" className="legalLink">Privacy Policy</a>
          <span className="legalSeparator">|</span>
          <a href="/cookies" className="legalLink">Cookie Policy</a>
        </div>
        <p className="copyright">© 2024 GimmeThat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
