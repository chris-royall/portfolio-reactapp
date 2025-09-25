import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppSlideOutPanel.css';

interface SlideOutPanel {
  closeSlideOut: () => void;
}

const SlideOutPanel: React.FC<SlideOutPanel> = ({ closeSlideOut }) => {
  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  return (
    <div className="slide-out-panel">
<div className="button-row">
  <a
    href="https://linkedin.com/in/chris-royall"
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      e.preventDefault();
      closeSlideOut();
      handleLinkClick('Slide Out: LinkedIn');
      window.open('https://linkedin.com/in/chris-royall', '_blank');
    }}
  >
    <i className="fa-brands fa-linkedin"></i>&nbsp;LinkedIn
  </a>
</div>

      <div className="button-row">
        <a
          href="https://github.com/chris-royall"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('Slide Out: GitHub')}
        >
          <i className="fa-brands fa-square-github"></i>&nbsp;GitHub
        </a>
      </div>

      <div className="button-row">
        <a
          href="https://www.credly.com/users/chris-royall"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('Slide Out: Credly')}
        >
          <i className="fa-solid fa-square-check"></i>&nbsp;Credly
        </a>
      </div>

            <div className="button-row">
        <a
          href="https://skillsprofile.skillbuilder.aws/user/chrisroyall"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('Slide Out: AWS')}
        >
          <i className="fa-brands fa-aws"></i>&nbsp;AWS
        </a>
      </div>

    </div>
  );
};

export default SlideOutPanel;
