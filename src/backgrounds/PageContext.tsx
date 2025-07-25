import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';

interface ContextProps {
  backgroundIndex: number
  setBackgroundIndex: Dispatch<SetStateAction<number>>
  setZenMode: Dispatch<SetStateAction<boolean>>
  zenMode: boolean
}
const PageContext = createContext<ContextProps>({
  backgroundIndex: 0,
  zenMode: false,
  setBackgroundIndex: () => {},
  setZenMode: () => {}
});


export const PageProvider = ({children}: PropsWithChildren) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [zenMode, setZenMode] = useState(false);

  return <PageContext.Provider value={{
    backgroundIndex,
    setBackgroundIndex,
    zenMode,
    setZenMode,
  }}>
    {children}
  </PageContext.Provider>
}

export const usePageContext = () => useContext(PageContext);
