import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Projects from './AppProjects';
import * as projectsService from '../../services/projects.service';
import * as loggingService from '../../services/logging.service';
import type { Project } from '../../services/projects.service';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Portfolio App',
    description: 'My portfolio website',
    services: 'React,TypeScript',
    sort: '1',
    frontend_repository: 'https://github.com/chris-royall/portfolio',
  },
  {
    id: '2',
    title: 'API Project',
    description: 'A REST API',
    services: 'Python',
    sort: '2',
    backend_repository: 'https://github.com/chris-royall/api',
    public_website: 'https://api.chrisroyall.com',
  },
];

describe('AppProjects', () => {
  beforeEach(() => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows a loading indicator while fetching', () => {
    vi.spyOn(projectsService, 'fetchProjects').mockReturnValue(new Promise(() => {}));
    render(<Projects />);
    expect(document.querySelector('.loader')).toBeInTheDocument();
  });

  it('renders project titles after loading', async () => {
    vi.spyOn(projectsService, 'fetchProjects').mockResolvedValue(mockProjects);
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('Portfolio App')).toBeInTheDocument();
      expect(screen.getByText('API Project')).toBeInTheDocument();
    });
  });

  it('renders project descriptions', async () => {
    vi.spyOn(projectsService, 'fetchProjects').mockResolvedValue(mockProjects);
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('My portfolio website')).toBeInTheDocument();
    });
  });

  it('renders frontend repository link when present', async () => {
    vi.spyOn(projectsService, 'fetchProjects').mockResolvedValue(mockProjects);
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /frontend repository/i })).toBeInTheDocument();
    });
  });

  it('renders public website link when present', async () => {
    vi.spyOn(projectsService, 'fetchProjects').mockResolvedValue(mockProjects);
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /public website/i })).toBeInTheDocument();
    });
  });

  it('renders nothing in the container when the API returns an empty array', async () => {
    vi.spyOn(projectsService, 'fetchProjects').mockResolvedValue([]);
    render(<Projects />);
    await waitFor(() => {
      expect(document.querySelector('.loader')).not.toBeInTheDocument();
    });
    expect(document.querySelectorAll('.inner-container')).toHaveLength(0);
  });
});
