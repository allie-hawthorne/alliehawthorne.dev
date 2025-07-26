import * as dat from 'dat.gui';
import { removeDatGui } from '../shared';

export const settings = {
  rotation: false,
  squircles: false,
  mouseStrength: 30,
  colourOffset: 0,
  speedX: 0.005,
  speedY: 0.005,
  speedZ: 0.01,
}

export function createDatGui() {
  // Deals with duplicate created due to safe mode in development
  removeDatGui();

  const gui = new dat.GUI();

  gui.add(settings, 'mouseStrength', 0, 100).name('Mouse Strength');
  gui.add(settings, 'colourOffset', 0, 360).name('Colour Offset');

  const speedFolder = gui.addFolder('Speed');
  speedFolder.add(settings, 'speedX', -0.02, 0.02).name('Speed X');
  speedFolder.add(settings, 'speedY', -0.02, 0.02).name('Speed Y');
  speedFolder.add(settings, 'speedZ', -0.02, 0.02).name('Speed Z');

  gui.add(settings, 'rotation').name('Rotation');
  gui.add(settings, 'squircles').name('Squircles');
}
