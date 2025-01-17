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
        <h2>Angular Web Application</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: Angular Web Application')}
            href="https://github.com/chris-royall/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
          <a
            onClick={() => handleLinkClick('Web Application: Angular Web Application')}
            href="https://chrisroyall.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Web Application</button>
          </a>
        </div>
        <p>
          This repository showcases my skills in front-end development and AWS cloud services by implementing a
          functional web application with advanced logging, email automation, and data retention strategies.
        </p>
      </div>

      <div className="inner-container">
        <h2>AI Recipe Generator</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: AI Recipe Generator')}
            href="https://github.com/chris-royall/ai-recipe-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
          <a
            onClick={() => handleLinkClick('Web Application: AI Recipe Generator')}
            href="https://recipes.chrisroyall.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Web Application</button>
          </a>
        </div>
        <p>
          This repository highlights my experience in front-end development and AWS cloud services through the creation of
          a functional, AI-powered web application. The app generates recipes based on user inputs, features secure user
          authentication, and includes advanced logging mechanisms.
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
        This project demonstrates the use of AWS CloudFormation to managed IAM permissions for different teams within an organisation. It allows the creation and update IAM Groups and Policies. By leveraging Infrastructure as Code, the script ensures consistency and reduces the risks associated with manual configuration.
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
        This project creates infrastructure using IaC Terraform to build a User Management Service. This service demonstrates how to deploy a scalable and serverless backend for managing user data using AWS services. It serves as an example of leveraging AWS Lambda, API Gateway, and DynamoDB in a serverless architecture.
        </p>
      </div>


    </div>
  );
};

export default Projects;
