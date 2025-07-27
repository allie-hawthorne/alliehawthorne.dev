import P5 from 'p5';
import Sketch from 'react-p5';
import * as dat from 'dat.gui';
import { useP5DupeRemover } from '../utils/p5DupeRemover';
import { useEffect } from 'react';
import { cols, removeDatGui } from './shared';

const hueAmplitude = 10;
let spacing = 1.4

const settings = {
  amplitude: 20,
  rangeX: 4,
  rangeY: 4,
  speed: 1e-3,
  trail: false
}

function createDatGui() {
  // Deals with duplicate created due to safe mode in development
  removeDatGui();

  const gui = new dat.GUI();
  gui.add(settings, 'amplitude', 10, 30);
  gui.add(settings, 'rangeX', 0, 30);
  gui.add(settings, 'rangeY', 0, 12);
  gui.add(settings, 'speed', 0, 0.005);
  gui.add(settings, 'trail');
}

export const Ellipses = () => {
  const setParent = useP5DupeRemover();

  useEffect(createDatGui, []);

  const setup = (p5: P5, canvasParentRef: Element) => {
    setParent(canvasParentRef);

    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(60);
    p5.pixelDensity(1);

    p5.colorMode(p5.HSB);
    p5.noStroke();

    const isMobile = window.innerWidth < 576;
    if (isMobile) {
      const minSize = Math.min(window.innerHeight, window.innerWidth)
      settings.amplitude = minSize / 20;
      settings.rangeX = 2;
      settings.rangeY = 4;
      spacing = 1.8;
    }
  };

  const windowResized = (p5: P5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: P5) => {
    const circleSize = settings.amplitude/8
    p5.push();
    p5.colorMode(p5.RGB);
    p5.background(cols.dark, cols.dark, cols.dark, settings.trail ? 2 : 255);
    p5.pop();
    p5.translate(p5.width/2, p5.height/2);

    for (let i = -settings.rangeX; i <= settings.rangeX; i++) {
      for (let j = -settings.rangeY; j <= settings.rangeY; j++) {
        p5.fill(calculateHue(p5, i * j * 4), 255, 255);
        p5.push();
        p5.translate((i * settings.amplitude * 2 * spacing), (j * settings.amplitude * 2 * spacing));
        p5.circle(getCircularPos(p5, Math.sin, j), getCircularPos(p5, Math.cos, i), circleSize)
        p5.pop()
      }
    }
  }
  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
};

const getCircularPos = (p5: P5, fn: (v: number) => number, extra: number) => fn(p5.millis() * settings.speed * extra) * settings.amplitude;

const calculateHue = (p5: P5, offset: number) => {
  const time = p5.millis() * settings.speed * hueAmplitude + (offset ?? 0);
  return time % 360;
};
