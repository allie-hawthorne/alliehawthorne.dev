import p5 from 'p5';
import { useP5DupeRemover } from '../../../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { colours } from '../../../utils/colourUtils';

// TODO: I don't like how this looks on mobile - the vars should be responsive
// TODO: I just copy/pasted from old codebase - probably should clean up at some point

let distance = 0;
let rotation = 0;
let count = 0;
let range = 0;
let len = 0;
const numTri = 6
const maxDist = 150;

const bounce = () => {
  distance = count + (maxDist - (count++ % maxDist));

  if ((distance/maxDist)%2 == 0) return --range;
  else return ++range;
}

export const RotatingTriangles = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);
    p5.noStroke();

    p5.rectMode(p5.CENTER);
    p5.fill(colours.light);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(colours.dark);
    p5.translate(p5.windowWidth/2, p5.windowHeight/2);
    p5.rotate(rotation);


    len = bounce();
    for (let i = 0; i < numTri; i++) {
      p5.push();
      p5.rotate(i*(p5.TWO_PI/numTri));
      p5.translate(0, len);
      p5.rotate(5*rotation);
      p5.triangle(0, 0, 100, 100, -100, 0);
      p5.pop();
    }

    rotation+=p5.HALF_PI/200;  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
