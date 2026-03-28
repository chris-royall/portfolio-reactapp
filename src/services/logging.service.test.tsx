import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  beforeEach(() => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('POSTs to the correct endpoint', async () => {
    await LoggingService('Contact');
    expect(fetch).toHaveBeenCalledWith(
      'https://api.chrisroyall.com/v1-prod/link',
      expect.objectContaining({ method: 'POST' })
    );
  });

  it('sends the buttonClicked value in the request body', async () => {
    await LoggingService('Hamburger');
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        body: JSON.stringify({ buttonClicked: 'Hamburger' }),
      })
    );
  });

  it('does not throw when the API returns an error response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
    } as Response);
    await expect(LoggingService('test')).resolves.toBeUndefined();
  });

  it('does not throw on network failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'));
    await expect(LoggingService('test')).resolves.toBeUndefined();
  });
});
