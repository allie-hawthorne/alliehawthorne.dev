import { usePageContext } from '../../PageContext';
import { Screen } from '../../utils';
import { PageWrapper } from '../wrappers/PageWrapper';
import { Checkers, CirclesAndLines, ContrastingCircles, Ellipses, GameOfLife, PerlinGrid, NoGallery, RotatingPlus, RotatingTriangles, SquareClover, TwinCircles } from './animations'
import { GrowingCircles } from './animations/GrowingCircles';

// TODO: Implement lazy loading for these components? This would also help with resizing issues
export const backgrounds = [
  NoGallery,
  PerlinGrid,
  Checkers,
  Ellipses,
  ContrastingCircles,
  TwinCircles,
  GrowingCircles,
  RotatingTriangles,
  RotatingPlus,
  CirclesAndLines,
  GameOfLife,
  SquareClover,
]

export const GalleryBackground = () => {
  const {backgroundIndex, screen} = usePageContext();

  return <div
    className="h-full w-full absolute overflow-hidden"
    style={{filter: screen === Screen.Gallery ? undefined : 'blur(2px)'}}
  >
    {backgrounds.map((Component, index) => (
      <PageWrapper display={index === backgroundIndex} key={index}>
        <Component key={index}/>
      </PageWrapper>
    ))}
  </div>;
};
