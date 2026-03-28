import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import PrimaryBadgesComponent from './AppPrimaryBadges';
import * as loggingService from '../../services/logging.service';

describe('AppPrimaryBadges', () => {
  beforeEach(() => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders exactly 3 badge images', () => {
    render(<PrimaryBadgesComponent />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('all badge links open in a new tab', () => {
    render(<PrimaryBadgesComponent />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('renders the AWS Cloud Practitioner badge', () => {
    render(<PrimaryBadgesComponent />);
    expect(screen.getByAltText('aws-certified-cloud-practitioner')).toBeInTheDocument();
  });
});
