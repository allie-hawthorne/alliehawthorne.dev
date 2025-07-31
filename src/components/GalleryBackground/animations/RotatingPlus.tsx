import P5 from 'p5';
import Sketch from 'react-p5';
import * as dat from 'dat.gui'
import { useP5DupeRemover } from '../../utils/p5DupeRemover';
import { colours, removeDatGui } from '../../../utils/colourUtils';
import { useState } from 'react';

const NUM_TILE_WIDTH = 10
const TIMING_SPEED = 0.0002;

const MAX_CHUNKINESS = 8;
const MIN_CHUNKINESS = 2;
const settings = {
  chunkiness: 2
}

function createDatGui() {
  // Deals with duplicate created due to safe mode in development
  removeDatGui();

  const gui = new dat.GUI();

  gui.add(settings, 'chunkiness', 0, 10).name('Plus Chunkiness');
}


export const RotatingPlus = () => {
  const setParent = useP5DupeRemover();

  const [tileSize, setTileSize] = useState(0);

  function resizeTiles(p5: P5) {
    let windowMax = Math.max(p5.windowHeight, p5.windowWidth);
    windowMax % 2 && windowMax--;
    setTileSize(windowMax/NUM_TILE_WIDTH);
  }

  function doPlusses(p5: P5, time: number) {
    p5.background(colours.dark);
    p5.fill(colours.light);

    doGrid(p5, 0, time, drawPlus);
  }

  function doSquares(p5: P5, time: number) {
    p5.background(colours.light);
    p5.fill(colours.dark);

    doGrid(p5, .5, time, drawSquare);
  }

  function doGrid(p5: P5, offset: number, time: number, drawItem: (p5: P5, chunkiness: number) => void) {
    const chunkiness = p5.map(settings.chunkiness, 0, 10, MAX_CHUNKINESS, MIN_CHUNKINESS);

    for (let i = 0-offset; i < NUM_TILE_WIDTH; i++) {
      for (let j = 0-offset; j < NUM_TILE_WIDTH; j++) {
        p5.push();
        p5.translate(i*tileSize, j*tileSize)
        p5.rotate(p5.PI * time)
        drawItem(p5, chunkiness);
        p5.pop();
      }
    }
  }

  function drawPlus(p5: P5, chunkiness: number) {
    p5.rect(0,0,tileSize/chunkiness, tileSize);
    p5.rect(0,0,tileSize, tileSize/chunkiness);
  }

  function drawSquare(p5: P5, chunkiness: number) {
    p5.square(0,0,tileSize*((chunkiness-1)/chunkiness));
  }

  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.pixelDensity(1);

    p5.noStroke();
    p5.rectMode(p5.CENTER);
    createDatGui();
    resizeTiles(p5);
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    resizeTiles(p5);
  };

  const draw = (p5: P5) => {
    p5.translate(tileSize/2, tileSize/2)

    const time = (TIMING_SPEED*p5.millis())%1;

    time > 0.5 ? doPlusses(p5, time) : doSquares(p5, time);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
