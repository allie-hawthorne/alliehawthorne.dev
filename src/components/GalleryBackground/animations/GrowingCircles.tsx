import P5 from 'p5';
import Sketch from 'react-p5';
import { colours, useP5DupeRemover } from '../../../utils';
import { useCallback, useState } from 'react';
import { Circle } from './circle';

const CIRCLE_COUNT = 50
export const getScreenDiameter = (p5: P5) => Math.sqrt(p5.width ** 2 + p5.height ** 2);

export const GrowingCircles = () => {
  const setParent = useP5DupeRemover();
  const [circles, setCircles] = useState<Circle[]>([]);

  const populateCircles = useCallback((p5: P5) => {
    setCircles(new Array(CIRCLE_COUNT).fill(1).map((_, i) => (
      new Circle(i * getScreenDiameter(p5)/CIRCLE_COUNT)
    )));
  }, [])


  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);

    p5.noFill()
    p5.strokeWeight(8)
    p5.stroke(colours.light)

    populateCircles(p5);
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    populateCircles(p5);
  };

  const draw = (p5: P5) => {
    p5.background(colours.dark);
    p5.translate(p5.windowWidth/2, p5.windowHeight/2);

    circles.forEach(c => c.draw(p5))
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
