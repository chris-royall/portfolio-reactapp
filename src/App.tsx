import { usePopupControl } from './services/popup-control.service';
import { useSlideOutControl } from './services/slide-out.service';
import AppNavbar from './components/AppNavbar/AppNavbar';
import AppPopup from './components/AppPopup/AppPopup';
import AppSlideOutPanel from './components/AppSlideOutPanel/AppSlideOutPanel';
import AppPrimaryBadges from './components/AppPrimaryBadges/AppPrimaryBadges';
import AppProjects from './components/AppProjects/AppProjects';
import AppSecondaryBadges from './components/AppSecondaryBadges/AppSecondaryBadges';
import AppFooter from './components/AppFooter/AppFooter';

const App = () => {
  const {
    showPopup,
    showPopupHandler,
    closePopupHandler,
  } = usePopupControl();

  const { showSlideOut, toggleSlideOutHandler, closeSlideOutHandler } = useSlideOutControl();

  return (
    <>
      <AppNavbar
        togglePopup={showPopupHandler}
        toggleSlideOut={toggleSlideOutHandler}
      />
      {showPopup && <AppPopup closePopup={closePopupHandler} />}
      {showSlideOut && <AppSlideOutPanel closeSlideOut={closeSlideOutHandler} />}
      <AppPrimaryBadges />
      <AppProjects />
      <AppSecondaryBadges />
      <AppFooter />
    </>
  );
};

export default App;
