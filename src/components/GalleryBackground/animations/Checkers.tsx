import P5 from 'p5';
import { useP5DupeRemover } from '../../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { cols } from '../../../utils/shared';


let squareSize: number;
let timing: number;

const NUM_SQUARES = 10;
const speed = 0.0002;

export const Checkers = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(cols.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);
    p5.rectMode(p5.CENTER);
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: P5) => {
    p5.background(cols.dark);

    const maxSize = Math.max(p5.width, p5.height);
    squareSize = maxSize/NUM_SQUARES;
    timing = (speed*p5.millis())%1;

    go(p5, timing >= 0.5)  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};

  const go = (p5: P5, first: boolean) => {
    p5.fill(first ? cols.dark : cols.light);
    p5.background(first ? cols.light : cols.dark);

    for (let i = -1; i < NUM_SQUARES+2; i++) {
      for (let j = -1; j < NUM_SQUARES+2; j++) {
        p5.push();
        p5.translate(i*squareSize, j*squareSize);
        p5.rotate(timing*p5.PI);
        if ((i+j) % 2 == 0 && first) p5.rect(0, 0, squareSize, squareSize);
        if ((i+j) % 2 == 1 && !first) p5.rect(0, 0, squareSize, squareSize);
        p5.pop();
      }
    }
  }
