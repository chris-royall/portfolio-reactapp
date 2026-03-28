import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchProjects } from './projects.service';
import type { Project } from './projects.service';

const mockProjects: Project[] = [
  { id: '2', title: 'Project B', description: 'Desc B', services: 'React', sort: '2' },
  { id: '1', title: 'Project A', description: 'Desc A', services: 'TypeScript', sort: '1' },
  { id: '3', title: 'Project C', description: 'Desc C', services: 'Python', sort: '3' },
];

describe('fetchProjects', () => {
  beforeEach(() => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockProjects,
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches from the correct endpoint', async () => {
    await fetchProjects();
    expect(fetch).toHaveBeenCalledWith('https://api.chrisroyall.com/v1-prod/projects');
  });

  it('returns projects sorted by the sort field ascending', async () => {
    const result = await fetchProjects();
    expect(result.map((p) => p.sort)).toEqual(['1', '2', '3']);
  });

  it('returns an empty array when the API returns a non-ok response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false } as Response);
    const result = await fetchProjects();
    expect(result).toEqual([]);
  });

  it('returns an empty array on network failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'));
    const result = await fetchProjects();
    expect(result).toEqual([]);
  });
});
