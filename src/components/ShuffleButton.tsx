import PlayIcon from 'mdi-react/PlayIcon';
import { useState } from 'react';
import { Button } from './Button';
import { usePageContext } from '../PageContext';
import { Screen } from '../utils/screen';

export const ShuffleButton = () => {
  const {nextBackground, setScreen, setZenMode} = usePageContext();

  const [glowing, setGlowing] = useState('glowing');

  return <Button
    icon={PlayIcon}
    className={`${glowing} h-20 w-20`}
    onClick={() => {
      setScreen(Screen.Zen)
      setZenMode(true);
      nextBackground();
      setGlowing('');
    }}
  >

  </Button>
};
