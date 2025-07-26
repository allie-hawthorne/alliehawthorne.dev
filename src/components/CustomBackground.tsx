import { usePageContext } from '../backgrounds/PageContext';
import { GameOfLife } from '../backgrounds/GameOfLife';
import { PlainBlack } from '../backgrounds/Plains';
import { SquareClover } from '../backgrounds/SquareClover';
import { TwinCircles } from '../backgrounds/TwinCircles';
import { Screen } from '../utils/screen';

export const backgroundMap = [
  PlainBlack,
  TwinCircles,
  GameOfLife,
  SquareClover,
  // If we're gonna use this, we need the text to change dynamically - maybe use context to store index & other data?
  // PastelRainbow,
]

export const CustomBackground = () => {
  const {backgroundIndex, screen} = usePageContext();

  const CurrentComponent = backgroundMap[backgroundIndex];

  return (
    <div className="h-full w-full absolute" style={{filter: screen === Screen.Zen ? undefined : 'blur(2px)'}}>
      <CurrentComponent />
    </div>
  );
};
