// services/popup-control.service.tsx
import { useState, useCallback } from 'react';

// Custom Hook for managing Popup state
export const usePopupControl = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Show the popup
  const showPopupHandler = useCallback(() => {
    setShowPopup(true);
  }, []);

  // Close the popup
  const closePopupHandler = useCallback(() => {
    setShowPopup(false);
  }, []);

  return {
    showPopup,
    showPopupHandler,
    closePopupHandler,
  };
};
