import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { backgrounds } from './components/GalleryBackground';
import { removeDatGui, Screen } from './utils';

interface ContextProps {
  backgroundIndex: number
  nextBackground: () => void
  prevBackground: () => void
  showGallery: boolean
  setShowGallery: Dispatch<SetStateAction<boolean>>
  screen: Screen
  setScreen: Dispatch<SetStateAction<Screen>>
  stopGallery: () => void
  fullscreen: boolean
  setFullscreen: Dispatch<SetStateAction<boolean>>
}
const PageContext = createContext<ContextProps>({
  backgroundIndex: 0,
  nextBackground: () => {},
  prevBackground: () => {},
  showGallery: false,
  setShowGallery: () => {},
  screen: Screen.Splash,
  setScreen: () => {},
  stopGallery: () => {},
  fullscreen: false,
  setFullscreen: () => {},
});

export const PageProvider = ({children}: PropsWithChildren) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [screen, setScreen] = useState<Screen>(Screen.Splash);

  // Ensures any dat.gui instances are cleaned up when the background changes
  useEffect(removeDatGui, [backgroundIndex]);

  // Toggles dat.gui panel when fullscreen is toggled
  useEffect(() => {
    const hiddenClass = 'hidden';
    const existingGui = document.querySelector('.dg.main');

    if (!existingGui) return;

    fullscreen ? existingGui.classList.add(hiddenClass) : existingGui.classList.remove(hiddenClass);
  }, [fullscreen]);

  const prevBackground = () => {
    setBackgroundIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      return newIndex < 1 ? backgrounds.length - 1 : newIndex;
    });
  };

  const nextBackground = () => {
    setBackgroundIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex >= backgrounds.length ? 1 : newIndex;
    });
  };

  const stopGallery = () => {
    setScreen(Screen.Splash);
    setShowGallery(false);
    setBackgroundIndex(0);
  }

  return <PageContext.Provider value={{
    backgroundIndex,
    nextBackground,
    prevBackground,
    showGallery,
    setShowGallery,
    screen,
    setScreen,
    stopGallery,
    fullscreen,
    setFullscreen
  }}>
    {children}
  </PageContext.Provider>
}

export const usePageContext = () => useContext(PageContext);
