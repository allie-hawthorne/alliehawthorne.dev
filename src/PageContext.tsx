import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { backgrounds } from './components/CustomBackground';
import { Screen } from './utils/screen';
import { removeDatGui } from './backgrounds/shared';

interface ContextProps {
  backgroundIndex: number
  nextBackground: () => void
  prevBackground: () => void
  zenMode: boolean
  setZenMode: Dispatch<SetStateAction<boolean>>
  screen: Screen
  setScreen: Dispatch<SetStateAction<Screen>>
  leaveZenMode: () => void
  fullscreen: boolean
  setFullscreen: Dispatch<SetStateAction<boolean>>
}
const PageContext = createContext<ContextProps>({
  backgroundIndex: 0,
  nextBackground: () => {},
  prevBackground: () => {},
  zenMode: false,
  setZenMode: () => {},
  screen: Screen.Splash,
  setScreen: () => {},
  leaveZenMode: () => {},
  fullscreen: false,
  setFullscreen: () => {},
});

export const PageProvider = ({children}: PropsWithChildren) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [zenMode, setZenMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [screen, setScreen] = useState<Screen>(Screen.Splash);

  // Ensures any dat.gui instances are cleaned up when the background changes
  useEffect(removeDatGui, [backgroundIndex]);

  const prevBackground = () => {
    setBackgroundIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      return newIndex < 1 ? backgrounds.length - 1 : newIndex;
    });
  };

  const nextBackground = () => {
    setBackgroundIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= backgrounds.length ? 1 : newIndex;
    });
  };

  const leaveZenMode = () => {
    setScreen(Screen.Splash);
    setZenMode(false);
    setBackgroundIndex(0);
  }

  return <PageContext.Provider value={{
    backgroundIndex,
    nextBackground,
    prevBackground,
    zenMode,
    setZenMode,
    screen,
    setScreen,
    leaveZenMode,
    fullscreen,
    setFullscreen
  }}>
    {children}
  </PageContext.Provider>
}

export const usePageContext = () => useContext(PageContext);
