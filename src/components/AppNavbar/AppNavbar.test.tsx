import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './AppNavbar';
import * as loggingService from '../../services/logging.service';

describe('AppNavbar', () => {
  const togglePopup = vi.fn();
  const toggleSlideOut = vi.fn();

  beforeEach(() => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    togglePopup.mockClear();
    toggleSlideOut.mockClear();
  });

  it('renders the site name', () => {
    render(<Navbar togglePopup={togglePopup} toggleSlideOut={toggleSlideOut} />);
    expect(screen.getByText('Chris Royall')).toBeInTheDocument();
  });

  it('renders the Contact button', () => {
    render(<Navbar togglePopup={togglePopup} toggleSlideOut={toggleSlideOut} />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls togglePopup and logs "Contact" when Contact button is clicked', async () => {
    render(<Navbar togglePopup={togglePopup} toggleSlideOut={toggleSlideOut} />);
    await userEvent.click(screen.getByText('Contact'));
    expect(togglePopup).toHaveBeenCalledTimes(1);
    expect(loggingService.LoggingService).toHaveBeenCalledWith('Contact');
  });

  it('calls toggleSlideOut and logs "Hamburger" when hamburger button is clicked', async () => {
    render(<Navbar togglePopup={togglePopup} toggleSlideOut={toggleSlideOut} />);
    const buttons = document.querySelectorAll('.navbar-btn');
    const hamburgerBtn = buttons[1];
    await userEvent.click(hamburgerBtn);
    expect(toggleSlideOut).toHaveBeenCalledTimes(1);
    expect(loggingService.LoggingService).toHaveBeenCalledWith('Hamburger');
  });
});
