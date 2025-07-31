import p5 from 'p5';
import Sketch from 'react-p5';
import { useP5DupeRemover } from '../../utils/p5DupeRemover';
import { cols } from './shared';

const SQUARE_SIZE = 100;
const CIRCLE_RADIUS = 200;
const NUM_TOPS = 2

const SQUARE_COUNT = Math.PI * 20
const ROTATION_OFFSET = 0.1
const ROTATION_SPEED = 1e-3;

export const SquareClover = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(cols.dark);
    p5.frameRate(60);
    p5.stroke(cols.light)
    p5.fill(cols.dark)
    p5.strokeWeight(3)
    p5.pixelDensity(1);
    p5.rectMode(p5.CENTER)
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.dark);
    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2)

    for (let i = 0; i < SQUARE_COUNT/NUM_TOPS; i++) {
      const angle = p5.map(i, 0, SQUARE_COUNT, 0, p5.TWO_PI)
      p5.push()
      p5.rotate(angle)
      for (let j = 0; j < NUM_TOPS; j++) {
        p5.rotate((p5.TWO_PI/NUM_TOPS) * j)
        p5.push()
        p5.translate(CIRCLE_RADIUS, 0)
        p5.rotate((p5.millis() * ROTATION_SPEED) + (i * ROTATION_OFFSET))
        p5.square(0,0, SQUARE_SIZE)
        p5.pop()
      }
      p5.pop()
    }
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
};
