import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePopupControl } from './popup-control.service';

describe('usePopupControl', () => {
  it('initialises with showPopup as false', () => {
    const { result } = renderHook(() => usePopupControl());
    expect(result.current.showPopup).toBe(false);
  });

  it('showPopupHandler sets showPopup to true', () => {
    const { result } = renderHook(() => usePopupControl());
    act(() => {
      result.current.showPopupHandler();
    });
    expect(result.current.showPopup).toBe(true);
  });

  it('closePopupHandler sets showPopup to false', () => {
    const { result } = renderHook(() => usePopupControl());
    act(() => {
      result.current.showPopupHandler();
    });
    act(() => {
      result.current.closePopupHandler();
    });
    expect(result.current.showPopup).toBe(false);
  });
});
