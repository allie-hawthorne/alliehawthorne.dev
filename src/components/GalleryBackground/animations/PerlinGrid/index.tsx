import P5 from 'p5';
import { useP5DupeRemover } from '../../../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { colours } from '../../../../utils/colourUtils';
import { createDatGui, settings } from './gui';
import { useEffect, useState } from 'react';

const ARRAY_SIZE_MAX = 20;

export const PerlinGrid = () => {
  const setParent = useP5DupeRemover();

  const [grid, setGrid] = useState<number[][]>([]);
  const [baseBlockSize, setBaseBlockSize] = useState(40);
  const [arraySizeX, setArraySizeX] = useState(ARRAY_SIZE_MAX);
  const [arraySizeY, setArraySizeY] = useState(ARRAY_SIZE_MAX);

  useEffect(createDatGui, []);

  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(colours.dark);
    p5.frameRate(60);
    p5.noStroke();
    p5.pixelDensity(1);
    p5.rectMode(p5.CENTER)
    p5.colorMode(p5.HSL)

    createGrid(p5);
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    createGrid(p5);
  };

  const draw = (p5: P5) => {
    // Make sure we're not using HSL when setting background colour
    p5.push();
    p5.colorMode(p5.RGB)
    p5.background(colours.dark);
    p5.pop();
    p5.translate(p5.width / 2, p5.height / 2)

    const {mouseX, mouseY, unroundedMouseX, unroundedMouseY} = getMouseGridPosition(p5);

    const data = grid.flatMap((row, i) => {
      return row.map((_, j) => {
        return getCellData(p5, i, j, {mouseX, mouseY, unroundedMouseX, unroundedMouseY});
      });
    });

    data.sort((a, b) => a.rectSize - b.rectSize);

    data.forEach(({i, j, hue, rectSize, rotation, roundedness}) => {
      const translateX = (j - ((arraySizeX - 1) / 2)) * baseBlockSize;
      const translateY = (i - ((arraySizeY - 1) / 2)) * baseBlockSize;

      p5.push()
      p5.translate(translateX, translateY)
      p5.rotate(rotation || 0);
      p5.fill((hue + settings.colourOffset) % 360, 100, 50);
      p5.rect(0, 0, rectSize, rectSize, roundedness, roundedness, roundedness, roundedness);
      p5.pop()
    });
  }

  function createGrid(p5: P5) {
    setBaseBlockSize(Math.max(p5.width, p5.height) / ARRAY_SIZE_MAX);

    const isLandscape = p5.width > p5.height;
    setArraySizeX(isLandscape ? ARRAY_SIZE_MAX : Math.floor(p5.width / baseBlockSize));
    setArraySizeY(isLandscape ? Math.floor(p5.height / baseBlockSize) : ARRAY_SIZE_MAX);

    setGrid(new Array(arraySizeY).fill(1).map(() => new Array(arraySizeX).fill(1)));
  }
  function getCellData(p5: P5, i: number, j: number, mouseGridData: ReturnType<typeof getMouseGridPosition>) {
    const {mouseX, mouseY, unroundedMouseX, unroundedMouseY} = mouseGridData;

    let size = p5.noise(i * 0.1 - (p5.frameCount * settings.speedX), j * 0.1 - (p5.frameCount * settings.speedY), p5.frameCount * settings.speedZ);

    const distanceToMouse = p5.dist(mouseX, mouseY, j, i);

    const rotation = settings.rotation ? getRotation(unroundedMouseX, unroundedMouseY, j, i) : 0;

    if (distanceToMouse < (ARRAY_SIZE_MAX/2)) {
      size += ((ARRAY_SIZE_MAX/2) - distanceToMouse) * (settings.mouseStrength / 1600);
    }

    let hue = p5.map(size, 0, 1, 360, 0);
    if (hue < 0) hue += 360;
    const rectSize = size * baseBlockSize;

    const roundedness = settings.squircles ? p5.map(size, 0, 0.8, rectSize / 2, 0, true) : 0;

    return {i, j, hue, rectSize, roundedness, rotation};
  }

  function getMouseGridPosition(p5: P5) {
    const unroundedMouseX = (p5.mouseX - (p5.width + baseBlockSize) / 2) / baseBlockSize + arraySizeX / 2;
    const unroundedMouseY = (p5.mouseY - (p5.height + baseBlockSize) / 2) / baseBlockSize + arraySizeY / 2;
    return {
      mouseX: Math.round(unroundedMouseX),
      mouseY: Math.round(unroundedMouseY),
      unroundedMouseX,
      unroundedMouseY
    };
  }

  const getRotation = (mouseX: number, mouseY: number, j: number, i: number) => {
    const xDiff = mouseX - j;
    const yDiff = mouseY - i;

    const angle = Math.atan2(yDiff, xDiff);
    const rotation = Math.sin(angle * 2);
    return rotation;
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
