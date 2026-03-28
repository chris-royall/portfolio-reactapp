import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSlideOutControl } from './slide-out.service';

describe('useSlideOutControl', () => {
  it('initialises with showSlideOut as false', () => {
    const { result } = renderHook(() => useSlideOutControl());
    expect(result.current.showSlideOut).toBe(false);
  });

  it('toggleSlideOutHandler sets showSlideOut to true when false', () => {
    const { result } = renderHook(() => useSlideOutControl());
    act(() => {
      result.current.toggleSlideOutHandler();
    });
    expect(result.current.showSlideOut).toBe(true);
  });

  it('toggleSlideOutHandler sets showSlideOut back to false when true', () => {
    const { result } = renderHook(() => useSlideOutControl());
    act(() => {
      result.current.toggleSlideOutHandler();
    });
    act(() => {
      result.current.toggleSlideOutHandler();
    });
    expect(result.current.showSlideOut).toBe(false);
  });

  it('closeSlideOutHandler sets showSlideOut to false', () => {
    const { result } = renderHook(() => useSlideOutControl());
    act(() => {
      result.current.toggleSlideOutHandler();
    });
    act(() => {
      result.current.closeSlideOutHandler();
    });
    expect(result.current.showSlideOut).toBe(false);
  });
});
