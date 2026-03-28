import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SlideOutPanel from './AppSlideOutPanel';
import * as loggingService from '../../services/logging.service';

describe('AppSlideOutPanel', () => {
  const closeSlideOut = vi.fn();

  beforeEach(() => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    closeSlideOut.mockClear();
  });

  it('renders LinkedIn, GitHub, Credly and AWS links', () => {
    render(<SlideOutPanel closeSlideOut={closeSlideOut} />);
    expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByText(/github/i)).toBeInTheDocument();
    expect(screen.getByText(/credly/i)).toBeInTheDocument();
    expect(screen.getByText(/aws/i)).toBeInTheDocument();
  });

  it('calls closeSlideOut and logs "Slide Out: LinkedIn" when LinkedIn is clicked', async () => {
    render(<SlideOutPanel closeSlideOut={closeSlideOut} />);
    await userEvent.click(screen.getByText(/linkedin/i));
    expect(closeSlideOut).toHaveBeenCalledTimes(1);
    expect(loggingService.LoggingService).toHaveBeenCalledWith('Slide Out: LinkedIn');
  });

  it('logs "Slide Out: GitHub" when GitHub link is clicked', async () => {
    render(<SlideOutPanel closeSlideOut={closeSlideOut} />);
    await userEvent.click(screen.getByText(/github/i));
    expect(loggingService.LoggingService).toHaveBeenCalledWith('Slide Out: GitHub');
  });
});
