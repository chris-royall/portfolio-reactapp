import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppPopup from './AppPopup';
import * as loggingService from '../../services/logging.service';

describe('AppPopup', () => {
  const closePopup = vi.fn();

  afterEach(() => {
    vi.restoreAllMocks();
    closePopup.mockClear();
  });

  it('renders the contact form', () => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    render(<AppPopup closePopup={closePopup} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('calls closePopup when the close button is clicked', async () => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    const user = userEvent.setup();
    render(<AppPopup closePopup={closePopup} />);
    const closeBtn = document.querySelector('.close-button')!;
    await user.click(closeBtn as HTMLElement);
    expect(closePopup).toHaveBeenCalledTimes(1);
  });

  it('shows a validation error when submitting an empty form', () => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    render(<AppPopup closePopup={closePopup} />);
    // fireEvent.submit bypasses HTML5 required-field validation in jsdom
    fireEvent.submit(document.querySelector('form')!);
    expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
  });

  it('submits form data to the contact API and shows success message', async () => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({}),
    } as Response);
    const user = userEvent.setup();

    render(<AppPopup closePopup={closePopup} />);
    await user.type(screen.getByLabelText(/name/i), 'Alice');
    await user.type(screen.getByLabelText(/email address/i), 'alice@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello!');

    await act(async () => {
      fireEvent.submit(document.querySelector('form')!);
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://api.chrisroyall.com/v1-prod/contact',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ name: 'Alice', email: 'alice@example.com', message: 'Hello!' }),
      })
    );
    expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
  });

  it('calls closePopup after 2 seconds following a successful submission', async () => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({}),
    } as Response);
    const user = userEvent.setup();

    render(<AppPopup closePopup={closePopup} />);
    await user.type(screen.getByLabelText(/name/i), 'Alice');
    await user.type(screen.getByLabelText(/email address/i), 'alice@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello!');

    await act(async () => {
      fireEvent.submit(document.querySelector('form')!);
    });

    expect(closePopup).not.toHaveBeenCalled();
    // Wait for the real 2s setTimeout to fire
    await waitFor(() => {
      expect(closePopup).toHaveBeenCalledTimes(1);
    }, { timeout: 3000 });
  }, 10000);

  it('shows an error message when the API call fails', async () => {
    vi.spyOn(loggingService, 'LoggingService').mockResolvedValue();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false } as Response);
    const user = userEvent.setup();

    render(<AppPopup closePopup={closePopup} />);
    await user.type(screen.getByLabelText(/name/i), 'Alice');
    await user.type(screen.getByLabelText(/email address/i), 'alice@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello!');

    await act(async () => {
      fireEvent.submit(document.querySelector('form')!);
    });

    await waitFor(() => {
      expect(screen.getByText(/failed to submit the form/i)).toBeInTheDocument();
    });
  });
});
