import { usePageContext } from '../PageContext';
import { GameOfLife } from '../backgrounds/GameOfLife';
import { PlainBlack } from '../backgrounds/Plains';
import { SquareClover } from '../backgrounds/SquareClover';
import { TwinCircles } from '../backgrounds/TwinCircles';
import { Screen } from '../utils/screen';
import { PerlinGrid } from '../backgrounds/PerlinGrid';
import { PageWrapper } from './PageWrapper';
import { Ellipses } from '../backgrounds/Ellipses';
import { CirclesAndLines } from '../backgrounds/CirclesAndLines';
import { Checkers } from '../backgrounds/Checkers';
import { ContrastingCircles } from '../backgrounds/ContrastingCircles';

// TODO: Implement lazy loading for these components?
export const backgrounds = [
  PlainBlack,
  PerlinGrid,
  Checkers,
  Ellipses,
  ContrastingCircles,
  TwinCircles,
  CirclesAndLines,
  GameOfLife,
  SquareClover,
  // If we're gonna use this, we need the text to change dynamically - maybe use context to store index & other data?
  // PastelRainbow,
]

export const CustomBackground = () => {
  const {backgroundIndex, screen} = usePageContext();

  return (
    <div className="h-full w-full absolute overflow-hidden" style={{filter: screen === Screen.Zen ? undefined : 'blur(2px)'}}>
      {backgrounds.map((Component, index) => (
        <PageWrapper display={index === backgroundIndex} key={index}>
          <Component key={index}/>
        </PageWrapper>
      ))}
    </div>
  );
};
