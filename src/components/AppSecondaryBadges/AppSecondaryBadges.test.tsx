import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SecondaryBadgesComponent from './AppSecondaryBadges';
import * as loggingService from '../../services/logging.service';

describe('AppSecondaryBadges', () => {
  beforeEach(() => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders exactly 17 badge images', () => {
    render(<SecondaryBadgesComponent />);
    expect(screen.getAllByRole('img')).toHaveLength(17);
  });

  it('all badge links open in a new tab', () => {
    render(<SecondaryBadgesComponent />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
