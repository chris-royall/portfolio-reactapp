// services/slide-out.service.tsx
import { useState, useCallback } from 'react';

// Custom Hook for managing Slide-Out state
export const useSlideOutControl = () => {
  const [showSlideOut, setShowSlideOut] = useState<boolean>(false);

  // Toggle the slide-out state
  const toggleSlideOutHandler = useCallback(() => {
    setShowSlideOut((prevState) => !prevState);
  }, []);

  // Close the slide-out explicitly
  const closeSlideOutHandler = useCallback(() => {
    setShowSlideOut(false);
  }, []);

  return {
    showSlideOut,
    toggleSlideOutHandler,
    closeSlideOutHandler,
  };
};
