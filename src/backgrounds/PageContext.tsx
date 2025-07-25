import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';
import { Screen } from '../utils/screen';

interface ContextProps {
  backgroundIndex: number
  setBackgroundIndex: Dispatch<SetStateAction<number>>
  zenMode: boolean
  setZenMode: Dispatch<SetStateAction<boolean>>
  screen: Screen
  setScreen: Dispatch<SetStateAction<Screen>>
}
const PageContext = createContext<ContextProps>({
  backgroundIndex: 0,
  setBackgroundIndex: () => {},
  zenMode: false,
  setZenMode: () => {},
  screen: Screen.Splash,
  setScreen: () => {},
});


export const PageProvider = ({children}: PropsWithChildren) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [zenMode, setZenMode] = useState(false);
  const [screen, setScreen] = useState<Screen>(Screen.Splash);

  return <PageContext.Provider value={{
    backgroundIndex,
    setBackgroundIndex,
    zenMode,
    setZenMode,
    screen,
    setScreen
  }}>
    {children}
  </PageContext.Provider>
}

export const usePageContext = () => useContext(PageContext);
