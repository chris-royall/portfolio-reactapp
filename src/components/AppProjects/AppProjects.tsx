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
        <h2>Portfolio Website</h2>
        <div className="tech-stack">
          <span className="tech-tag react">React</span>
          <span className="tech-tag typescript">TypeScript</span>
          <span className="tech-tag python">Python</span>
          <span className="tech-tag aws">Amplify</span>
          <span className="tech-tag aws">CloudFormation</span>
          <span className="tech-tag aws">API Gateway</span>
          <span className="tech-tag aws">Lambda</span>
          <span className="tech-tag aws">SES</span>
          <span className="tech-tag aws">CloudWatch</span>
        </div>
        <p>Full-stack portfolio with React frontend and AWS CloudFormation backend. Features API Gateway, Lambda functions, SES email services, and analytics via CloudWatch.</p>
        <div className="button-container">
          <a onClick={() => handleLinkClick('GitHub: Portfolio React Frontend')} href="https://github.com/chris-royall/portfolio-reactapp" target="_blank" rel="noopener noreferrer">
            <button>Frontend Repository</button>
          </a>
          <a onClick={() => handleLinkClick('GitHub: Portfolio CloudFormation Backend')} href="https://github.com/chris-royall/portfolio-cloudformation" target="_blank" rel="noopener noreferrer">
            <button>Backend Repository</button>
          </a>
        </div>
      </div>

            <div className="inner-container">
        <h2>IP Geolocation Monitoring</h2>
        <div className="tech-stack">
          <span className="tech-tag python">Python</span>
          <span className="tech-tag aws">CloudFormation</span>
          <span className="tech-tag aws">Systems Manager</span>
          <span className="tech-tag aws">CloudTrail</span>
          <span className="tech-tag aws">EventBridge</span>
          <span className="tech-tag aws">Lambda</span>
          <span className="tech-tag aws">CloudWatch</span>
        </div>
        <p>Event-driven security monitoring that processes IP addresses from EventBridge, performs geolocation lookups, and validates locations against allowlists stored in AWS Systems Manager Parameter Store.</p>
        <div className="button-container">
          <a onClick={() => handleLinkClick('GitHub: IP Geolocation Security Group Monitoring')} href="https://github.com/chris-royall/ip-geolocation" target="_blank" rel="noopener noreferrer">
            <button>GitHub Repository</button>
          </a>
        </div>
      </div>

      <div className="inner-container">
        <h2>AI-Powered Applications</h2>
        <div className="tech-stack">
          <span className="tech-tag typescript">TypeScript</span>
          <span className="tech-tag javascript">JavaScript</span>
          <span className="tech-tag aws">Amplify</span>
          <span className="tech-tag graphql">GraphQL</span>
          <span className="tech-tag aws">AppSync</span>
          <span className="tech-tag aws">Cognito</span>
          <span className="tech-tag aws">Bedrock</span>
          <span className="tech-tag aws">CloudWatch</span>
        </div>
        <p>AI applications including a recipe generator with personalized recommendations and a race strategy predictor for motorsport competitions that optimizes pit stops and tire choices.</p>
        <div className="button-container">
          <a onClick={() => handleLinkClick('GitHub: AI Recipe Generator')} href="https://github.com/chris-royall/ai-recipe-generator" target="_blank" rel="noopener noreferrer">
            <button>Recipe Generator</button>
          </a>
          <a onClick={() => handleLinkClick('GitHub: AI Race Strategy Predictor')} href="https://github.com/chris-royall/ai-race-strat-predictor" target="_blank" rel="noopener noreferrer">
            <button>Race Strategy</button>
          </a>
        </div>
      </div>

      <div className="inner-container">
        <h2>User Management Service</h2>
        <div className="tech-stack">
          <span className="tech-tag terraform">Terraform</span>
          <span className="tech-tag python">Python</span>
          <span className="tech-tag aws">API Gateway</span>
          <span className="tech-tag aws">Lambda</span>
          <span className="tech-tag aws">CloudWatch</span>
          <span className="tech-tag aws">DynamoDB</span>
        </div>
        <p>Serverless user management system built with Terraform IaC. Demonstrates scalable architecture using AWS Lambda, API Gateway, and DynamoDB.</p>
        <div className="button-container">
          <a onClick={() => handleLinkClick('GitHub: Terraform-Deployed Scalable User Management Service')} href="https://github.com/chris-royall/serverless-user-management" target="_blank" rel="noopener noreferrer">
            <button>GitHub Repository</button>
          </a>
        </div>
      </div>

      <div className="inner-container">
        <h2>IAM Permissions Management</h2>
        <div className="tech-stack">
          <span className="tech-tag aws">CloudFormation</span>
          <span className="tech-tag aws">IAM</span>
        </div>
        <p>CloudFormation templates for managing IAM permissions across teams. Implements Infrastructure as Code for consistent and secure access management.</p>
        <div className="button-container">
          <a onClick={() => handleLinkClick('GitHub: AWS CloudFormation Deployed IAM Permissions')} href="https://github.com/chris-royall/aws-iam-permissions" target="_blank" rel="noopener noreferrer">
            <button>GitHub Repository</button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Projects;
