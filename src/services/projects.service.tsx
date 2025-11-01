export interface Project {
  id: string;
  title: string;
  description: string;
  services: string;
  sort: string;
  backend_repository?: string;
  frontend_repository?: string;
  public_website?: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('https://api.chrisroyall.com/v1-prod/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const projects: Project[] = await response.json();
    return projects.sort((a, b) => parseInt(a.sort) - parseInt(b.sort));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};