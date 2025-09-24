import { PropsWithChildren, useEffect, useState } from 'react';
import { defaultTransition } from '../../App';

interface PageWrapperProps {
  display: boolean
}

const TRANSITION_TIME = 300;

// TODO: Rethink this and share with other transition stuff
export const PageWrapper = ({ children, display }: PropsWithChildren<PageWrapperProps>) => {
  const [opacity, setOpacity] = useState(1);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!display) {
      setOpacity(0)
      setTimeout(() => setShow(false), TRANSITION_TIME);
      return;
    }
    setShow(true)
    setTimeout(() => setOpacity(1), TRANSITION_TIME);
  }, [display]);

  if (!show) return null;

  return <div style={{ display: show ? 'unset' : 'none', opacity }} className={`${defaultTransition} absolute`}>
    {children}
  </div>;
};
