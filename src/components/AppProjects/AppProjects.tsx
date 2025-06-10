import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppProjects.css';

const Projects: React.FC = () => {

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h2>Portfolio Website (React + AWS CloudFormation)</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: Portfolio React Frontend')}
            href="https://github.com/chris-royall/portfolio-reactapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Frontend Repository</button>
          </a>
          <a
            onClick={() => handleLinkClick('GitHub: Portfolio CloudFormation Backend')}
            href="https://github.com/chris-royall/portfolio-cloudformation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Backend Repository</button>
          </a>
        </div>
        <p>
          Full-stack portfolio with React frontend and AWS CloudFormation backend. Features API Gateway, 
          Lambda functions, SES email services, and analytics via CloudWatch and Kinesis.
        </p>
      </div>

      <div className="inner-container">
        <h2>AI-Powered Applications</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: AI Recipe Generator')}
            href="https://github.com/chris-royall/ai-recipe-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Recipe Generator Repository</button>
          </a>
          <a
            onClick={() => handleLinkClick('GitHub: AI Race Strategy Predictor')}
            href="https://github.com/chris-royall/ai-race-strat-predictor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Race Strategy Repository</button>
          </a>
        </div>
        <p>
          AI applications including a recipe generator with personalized recommendations and a race strategy 
          predictor for motorsport competitions that optimizes pit stops and tire choices.
        </p>
      </div>

      <div className="inner-container">
        <h2>AWS CloudFormation Deployed IAM Permissions</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: AWS CloudFormation Deployed IAM Permissions')}
            href="https://github.com/chris-royall/aws-iam-permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
        </div>
        <p>
          CloudFormation templates for managing IAM permissions across teams. Implements Infrastructure as Code 
          for consistent and secure access management.
        </p>
      </div>

      <div className="inner-container">
        <h2>Terraform-Deployed Scalable User Management Service</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: Terraform-Deployed Scalable User Management Service')}
            href="https://github.com/chris-royall/serverless-user-management"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
        </div>
        <p>
          Serverless user management system built with Terraform IaC. Demonstrates scalable architecture using 
          AWS Lambda, API Gateway, and DynamoDB.
        </p>
      </div>
    </div>
  );
};

export default Projects;
