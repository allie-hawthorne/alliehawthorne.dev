import p5 from 'p5';
import { useEffect, useState } from 'react';
import { useP5DupeRemover } from '../../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { getCurrentBreakpoints } from '../../utils/breakpointUtils';
import { cols } from '../../../utils/shared';

interface Position {
  x: number;
  y: number;
}
let positions: Position[][] = [];
const MAX_POS = 50;
const BASE_SPEED = 0.4e-2;

export const TwinCircles = () => {
  const setParent = useP5DupeRemover();
  const { md } = getCurrentBreakpoints();

  useEffect(() => {
    positions = [];
  }, []);

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(cols.dark);
    p5.frameRate(60);
    p5.noStroke();
    p5.pixelDensity(1);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.dark);
    p5.translate(p5.windowWidth/2, p5.windowHeight/2);

    const normalisers = {
      width: p5.windowWidth/3,
      height: p5.windowHeight/3,
      speed: md ? BASE_SPEED : BASE_SPEED * 2,
    }

    const theta = p5.frameCount*normalisers.speed;
    positions.push([
      {x: p5.sin(2*theta)*normalisers.width, y: p5.cos(theta)*normalisers.height},
      {x: -p5.sin(2*theta)*normalisers.width, y: -p5.cos(theta)*normalisers.height},
    ]);

    if (positions.length > MAX_POS) {
       positions.shift();
    }

    positions.forEach((mp, i) => {
      p5.fill(cols.light, p5.map(i, 0, MAX_POS, 0, 200));

      mp.forEach((_, index) => (
        p5.ellipse(positions[i][index].x, positions[i][index].y, i, i)
      ))
    });
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
