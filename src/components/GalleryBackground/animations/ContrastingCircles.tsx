import P5 from 'p5';
import Sketch from 'react-p5';
import { colours, useP5DupeRemover } from '../../../utils';

let count = 0;

const drawArcs = (p5: P5, radius: number) => {
  p5.arc(0, 0, radius, radius, 0, p5.HALF_PI);
  p5.arc(0, 0, radius, radius, p5.PI, p5.HALF_PI+p5.PI);
}

export const ContrastingCircles = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: P5) => {
    p5.background(colours.light);
    p5.translate(p5.width/2, p5.height/2);
    p5.strokeWeight(4);

    //draws black rectangle on left side of screen
    p5.fill(colours.dark);
    p5.rectMode(p5.CORNERS)
    p5.rect(0, -p5.height, -p5.width/2, p5.height);
    p5.stroke(colours.light);

    const minSize = Math.min(p5.width, p5.height);

    //draws two sets of two quarter-circles, rotating in opposite directions
    p5.rotate(count);
    drawArcs(p5, minSize);
    p5.noStroke();
    p5.fill(colours.light);
    p5.rotate(-2*count);
    drawArcs(p5, minSize/2);

    count+=p5.QUARTER_PI/50;
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
