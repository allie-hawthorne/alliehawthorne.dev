import p5 from 'p5';
import { useP5DupeRemover } from '../../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { colours } from '../../../utils/colourUtils';

export const Template = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(colours.dark);
    p5.translate(p5.windowWidth/2, p5.windowHeight/2);

    p5.rect(-50, -50, 100, 100);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
