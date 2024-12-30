import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppFooter.css';

const Footer: React.FC = () => {

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  return (
    <footer>
      <p>
        Christopher Royall |{' '}
        <a
          onClick={() => handleLinkClick('Privacy Policy')}
          href="https://www.termsfeed.com/live/3d006c21-5cb9-4d69-9433-1fe293dcb5c2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
