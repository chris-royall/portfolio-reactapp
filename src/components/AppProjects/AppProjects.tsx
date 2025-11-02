import React, { useState, useEffect } from 'react';
import { LoggingService } from '../../services/logging.service';
import { fetchProjects, Project } from '../../services/projects.service';
import './AppProjects.css';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  const getTechTagClass = (service: string): string => {
    const serviceLower = service.toLowerCase();
    if (['react', 'typescript', 'javascript', 'python', 'terraform', 'graphql'].includes(serviceLower)) {
      return serviceLower;
    }
    return 'aws';
  };

  const renderProject = (project: Project) => (
    <div key={project.id} className="inner-container">
      <h2>{project.title}</h2>
      <div className="tech-stack">
        {project.services.split(',').map((service, index) => (
          <span key={index} className={`tech-tag ${getTechTagClass(service.trim())}`}>
            {service.trim()}
          </span>
        ))}
      </div>
      <p>{project.description}</p>
      <div className="button-container">
        {project.frontend_repository && (
          <a onClick={() => handleLinkClick(`GitHub: ${project.title} Frontend`)} href={project.frontend_repository} target="_blank" rel="noopener noreferrer">
            <button>Frontend Repository</button>
          </a>
        )}
        {project.backend_repository && (
          <a onClick={() => handleLinkClick(`GitHub: ${project.title} Backend`)} href={project.backend_repository} target="_blank" rel="noopener noreferrer">
            <button>{project.frontend_repository ? 'Backend Repository' : 'GitHub Repository'}</button>
          </a>
        )}
        {project.public_website && (
          <a onClick={() => handleLinkClick(`Public Website: ${project.title}`)} href={project.public_website} target="_blank" rel="noopener noreferrer">
            <button>Public Website</button>
          </a>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container">
      {projects.map(renderProject)}
    </div>
  );
};

export default Projects;
