import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppNavbar.css';

interface NavbarProps {
  togglePopup: () => void;
  toggleSlideOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ togglePopup, toggleSlideOut }) => {

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };
  

  return (
    <nav className="navbar">
      {/* Contact Button */}
      <div className="navbar-btn" onClick={() => { togglePopup(); handleLinkClick('Contact'); }}>
        <i className="fa-solid fa-square-envelope"></i>&nbsp;<span className="contact-text">Contact</span>
      </div>
  
      {/* Website Name */}
      <div className="navbar-brand" onClick={() => handleLinkClick('Privacy Policy')}>
        Chris Royall
      </div>
  
      {/* Hamburger Button */}
      <div className="navbar-btn" onClick={() => { toggleSlideOut(); handleLinkClick('Hamburger'); }}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
