import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppSecondaryBadges.css';

const SecondaryBadgesComponent: React.FC = () => {
  const badges = [
    {
      alt: 'databricks-generative-ai-fundamentals',
      src: '/assets/images/secondary_badges/d2d24d56-8a55-4923-9959-0b3cf400f224.png',
      url: 'https://credentials.databricks.com/8ee0e5f3-406f-4d66-9793-77735bef19a1#acc.PHMtcbah',
      label: 'Badge: databricks-generative-ai-fundamentals',
    },
    {
      alt: 'aws-cloud-quest-cloud-practitioner',
      src: '/assets/images/secondary_badges/aws-cloud-quest-cloud-practitioner.png',
      url: 'https://www.credly.com/badges/a41964c2-fa5e-4a70-9679-f54e1716f80d/public_url',
      label: 'Badge: aws-cloud-quest-cloud-practitioner',
    },
    {
      alt: 'aws-cloud-quest-solutions-architect',
      src: '/assets/images/secondary_badges/aws-cloud-quest-solutions-architect.png',
      url: 'https://www.credly.com/badges/17653143-16b3-4e17-bce6-593bc0c3e888/public_url',
      label: 'Badge: aws-cloud-quest-solutions-architect',
    },
    {
      alt: 'aws-knowledge-cloud-essentials',
      src: '/assets/images/secondary_badges/aws-knowledge-cloud-essentials.png',
      url: 'https://www.credly.com/badges/bf7123f8-d6fa-4668-a586-297a335a77ee/public_url',
      label: 'Badge: aws-knowledge-cloud-essentials',
    },
    {
      alt: 'net-workloads-on-aws-lambda',
      src: '/assets/images/secondary_badges/net-workloads-on-aws-lambda.png',
      url: 'https://www.credly.com/badges/50592ad0-5a58-48e4-a37e-33d5c643898a/public_url',
      label: 'Badge: net-workloads-on-aws-lambda',
    },
    {
      alt: 'net-workloads-on-aws-app-runner',
      src: '/assets/images/secondary_badges/net-workloads-on-aws-app-runner.png',
      url: 'https://www.credly.com/badges/345078e2-0574-4110-8802-e5b121629b37/public_url',
      label: 'Badge: net-workloads-on-aws-app-runner',
    },
    {
      alt: 'aws-educate-introduction-to-cloud-101',
      src: '/assets/images/secondary_badges/aws-educate-introduction-to-cloud-101.png',
      url: 'https://www.credly.com/badges/b489d308-1721-420c-80e9-4451fa8c2df0/public_url',
      label: 'Badge: aws-educate-introduction-to-cloud-101',
    },
    {
      alt: 'aws-educate-machine-learning-foundations',
      src: '/assets/images/secondary_badges/aws-educate-machine-learning-foundations.png',
      url: 'https://www.credly.com/badges/99b1f1c8-2759-4567-bca9-ab45c8c692e2/public_url',
      label: 'Badge: aws-educate-machine-learning-foundations',
    },
    {
      alt: 'aws-educate-web-builder',
      src: '/assets/images/secondary_badges/aws-educate-web-builder.png',
      url: 'https://www.credly.com/badges/1276498e-1473-4578-b828-34a13ccdb88e',
      label: 'Badge: aws-educate-web-builder',
    },
    {
      alt: 'aws-educate-introduction-to-generative-ai',
      src: '/assets/images/secondary_badges/aws-educate-introduction-to-generative-ai.png',
      url: 'https://www.credly.com/badges/0aff6a15-5e2a-439d-a346-b6539380e656',
      label: 'Badge: aws-educate-introduction-to-generative-ai',
    },
    {
      alt: 'aws-educate-getting-started-with-cloud-ops',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-cloud-ops.png',
      url: 'https://www.credly.com/badges/6fddf01b-631e-4ebe-92e9-b940094ded6c/public_url',
      label: 'Badge: aws-educate-getting-started-with-cloud-ops',
    },
    {
      alt: 'aws-educate-getting-started-with-compute',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-compute.png',
      url: 'https://www.credly.com/badges/4c6fe732-2605-481f-b2a2-270a72cdddad/public_url',
      label: 'Badge: aws-educate-getting-started-with-compute',
    },
    {
      alt: 'aws-educate-getting-started-with-databases',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-databases.png',
      url: 'https://www.credly.com/badges/7ca8e1e6-5471-404c-930a-f1fada61469f/public_url',
      label: 'Badge: aws-educate-getting-started-with-databases',
    },
    {
      alt: 'aws-educate-getting-started-with-networking',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-networking.png',
      url: 'https://www.credly.com/badges/f29cbe64-5213-446a-9bbb-9e0c4184f84b/public_url',
      label: 'Badge: aws-educate-getting-started-with-networking',
    },
    {
      alt: 'aws-educate-getting-started-with-security',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-security.png',
      url: 'https://www.credly.com/badges/6795cd0e-d12c-482d-9eca-b74c0410d038/public_url',
      label: 'Badge: aws-educate-getting-started-with-security',
    },
    {
      alt: 'aws-educate-getting-started-with-serverless',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-serverless.png',
      url: 'https://www.credly.com/badges/1779a440-3a8f-406c-afac-c0d682034110/public_url',
      label: 'Badge: aws-educate-getting-started-with-serverless',
    },
    {
      alt: 'aws-educate-getting-started-with-storage',
      src: '/assets/images/secondary_badges/aws-educate-getting-started-with-storage.png',
      url: 'https://www.credly.com/badges/0f57a79a-f2e8-46dd-b4a9-0da4d2dd479b/public_url',
      label: 'Badge: aws-educate-getting-started-with-storage',
    },
  ];

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  return (
    <div className="secondary_badges-container">
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.url}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary_badges"
          onClick={() => handleLinkClick(badge.label)}
        >
          <img src={badge.src} alt={badge.alt} />
        </a>
      ))}
    </div>
  );
};

export default SecondaryBadgesComponent;
