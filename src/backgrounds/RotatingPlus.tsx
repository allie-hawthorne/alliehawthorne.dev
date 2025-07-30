import P5 from 'p5';
import { useP5DupeRemover } from '../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { cols } from './shared';

const NUM_TILE_WIDTH = 10
const TIMING_SPEED = 0.0002;
const PLUS_THICKNESS = 8

// TODO: Remove global variable!
let time = 0;
let rotation = 0;
let windowMin: number;
let tileSize: number;

export const RotatingPlus = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(cols.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);

    p5.noStroke();
    p5.rectMode(p5.CENTER);
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: P5) => {
    p5.translate(tileSize/2, tileSize/2)

    windowMin = Math.max(p5.windowHeight, p5.windowWidth);
    windowMin = windowMin % 2 ? windowMin - 1 : windowMin;
    tileSize = windowMin/NUM_TILE_WIDTH;

    time = (TIMING_SPEED*p5.millis())%1;
    rotation = p5.map(time, 0, 1, -.5, .5)

    time > 0.5 ? doPlusses(p5) : doSquares(p5);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};

  function doPlusses(p5: P5) {
    p5.background(cols.dark);
    p5.fill(cols.light);

    doGrid(p5, 0, () => drawPlus(p5));
  }

  function doSquares(p5: P5) {
    p5.background(cols.light);
    p5.fill(cols.dark);

    doGrid(p5, .5, () => drawSquare(p5));
  }

  function doGrid(p5: P5, offset: number, drawItem: () => void) {
    for (let i = 0-offset; i < NUM_TILE_WIDTH; i++) {
      for (let j = 0-offset; j < NUM_TILE_WIDTH; j++) {
        p5.push();
        p5.translate(i*tileSize, j*tileSize)
        p5.rotate(p5.PI * time)
        drawItem();
        p5.pop();
      }
    }
  }

  function drawPlus(p5: P5) {
    p5.rect(0,0,tileSize/PLUS_THICKNESS, tileSize);
    p5.rect(0,0,tileSize, tileSize/PLUS_THICKNESS);
  }

  function drawSquare(p5: P5) {
    p5.square(0,0,tileSize*((PLUS_THICKNESS-1)/PLUS_THICKNESS));
  }
