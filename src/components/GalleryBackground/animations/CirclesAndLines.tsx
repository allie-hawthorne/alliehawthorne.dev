import p5 from 'p5';
import Sketch from 'react-p5';
import { useP5DupeRemover } from '../../utils/p5DupeRemover';
import { colours } from '../../../utils/colourUtils';

let angle1 = 0;
let angle2 = Math.PI;

export const CirclesAndLines = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.noStroke();
    p5.pixelDensity(1);
    p5.strokeWeight(2);
    p5.stroke(colours.light);
    p5.noFill();
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(colours.dark);
    p5.translate(p5.windowWidth/2, p5.windowHeight/2);

    const minSize = Math.min(p5.width, p5.height);

    const size = minSize/6;
    const radius = size/2;

    const diagonalLength = size*Math.sqrt(3);

    angle1 -= 0.05;
    angle2 -= 0.05;

    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2));

    p5.line(radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength, radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);

    p5.line(radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle2) -size, radius * p5.cos(angle2) - diagonalLength);
    p5.line(radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);

    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);

    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength);
    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);

    //Adjacents
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength);

    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);

    p5.line(radius * p5.sin(angle2) -size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);
    p5.line(radius * p5.sin(angle2) -size, radius * p5.cos(angle2) - diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
