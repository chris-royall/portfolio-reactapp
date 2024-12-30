import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppPrimaryBadges.css';

const PrimaryBadgesComponent: React.FC = () => {
  const badges = [
    {
      alt: 'microsoft-365-certified-fundamentals',
      src: '/public/assets/images/primary_badges/microsoft-365-certified-fundamentals.png',
      url: 'https://learn.microsoft.com/api/credentials/share/en-gb/ChristopherRoyall-5637/F722D868FA9BA4ED?sharingId=9998F707F4431F17',
      label: 'Badge: microsoft-365-certified-fundamentals',
    },
    {
      alt: 'microsoft-certified-azure-fundamentals',
      src: '/public/assets/images/primary_badges/microsoft-certified-azure-fundamentals.png',
      url: 'https://learn.microsoft.com/api/credentials/share/en-gb/ChristopherRoyall-5637/89269917581C4823?sharingId=9998F707F4431F17',
      label: 'Badge: microsoft-certified-azure-fundamentals',
    },
    {
      alt: 'aws-certified-cloud-practitioner',
      src: '/public/assets/images/primary_badges/aws-certified-cloud-practitioner v2.png',
      url: 'https://www.credly.com/badges/c7601def-caa2-49a4-9873-8cc98ac67446/public_url',
      label: 'Badge: aws-certified-cloud-practitioner',
    }
  ];

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };
  
  return (
    <div className="primary_badges-container">
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.url}
          target="_blank"
          rel="noopener noreferrer"
          className="primary_badges"
          onClick={() => handleLinkClick(badge.label)}
        >
          <img src={badge.src} alt={badge.alt} />
        </a>
      ))}
    </div>
  );
};

export default PrimaryBadgesComponent;
