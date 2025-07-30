import { usePageContext } from '../PageContext';
import { Screen } from '../utils/screen';
import { PageWrapper } from './PageWrapper';
import { Checkers, CirclesAndLines, ContrastingCircles, Ellipses, GameOfLife, PerlinGrid, PlainBlack, RotatingPlus, SquareClover, TwinCircles } from '../backgrounds'

// TODO: Implement lazy loading for these components? This would also help with resizing issues
export const backgrounds = [
  PlainBlack,
  PerlinGrid,
  Checkers,
  Ellipses,
  ContrastingCircles,
  TwinCircles,
  RotatingPlus,
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
