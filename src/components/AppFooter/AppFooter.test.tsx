import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './AppFooter';
import * as loggingService from '../../services/logging.service';

describe('AppFooter', () => {
  beforeEach(() => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the author name', () => {
    render(<Footer />);
    expect(screen.getByText(/christopher royall/i)).toBeInTheDocument();
  });

  it('renders the Privacy Policy link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument();
  });

  it('Privacy Policy link opens in a new tab', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('target', '_blank');
  });
});
