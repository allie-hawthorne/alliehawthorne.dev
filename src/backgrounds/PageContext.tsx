import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';
import { backgroundMap } from '../components/CustomBackground';
import { Screen } from '../utils/screen';

interface ContextProps {
  backgroundIndex: number
  nextBackground: () => void
  zenMode: boolean
  setZenMode: Dispatch<SetStateAction<boolean>>
  screen: Screen
  setScreen: Dispatch<SetStateAction<Screen>>
}
const PageContext = createContext<ContextProps>({
  backgroundIndex: 0,
  nextBackground: () => {},
  zenMode: false,
  setZenMode: () => {},
  screen: Screen.Splash,
  setScreen: () => {},
});


export const PageProvider = ({children}: PropsWithChildren) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [zenMode, setZenMode] = useState(false);
  const [screen, setScreen] = useState<Screen>(Screen.Splash);

  const nextBackground = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundMap.length);
  };

  return <PageContext.Provider value={{
    backgroundIndex,
    nextBackground,
    zenMode,
    setZenMode,
    screen,
    setScreen
  }}>
    {children}
  </PageContext.Provider>
}

export const usePageContext = () => useContext(PageContext);
