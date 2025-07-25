import { usePageContext } from '../backgrounds/PageContext';
import { GameOfLife } from '../backgrounds/GameOfLife';
import { PlainBlack, PlainPink } from '../backgrounds/Plains';
import { Tmp } from '../backgrounds/Tmp';
import { Tmp2 } from '../backgrounds/Tmp2';
import { TwinCircles } from '../backgrounds/TwinCircles';

export const backgroundMap = [
  PlainBlack,
  TwinCircles,
  GameOfLife,
  Tmp,
  Tmp2,
  // If we're gonna use this, we need the text to change dynamically - maybe use context to store index & other data?
  // PastelRainbow,
]

export const CustomBackground = () => {
  const {backgroundIndex, zenMode} = usePageContext();

  const CurrentComponent = backgroundMap[backgroundIndex];

  return (
    <div className="h-full w-full absolute" style={{filter: zenMode ? undefined : 'blur(2px)'}}>
      <CurrentComponent />
    </div>
  );
};
