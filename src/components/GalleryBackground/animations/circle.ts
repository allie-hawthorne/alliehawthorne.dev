import P5 from 'p5';
import { getScreenDiameter } from './GrowingCircles';
import { colours } from '../../../utils';

const inverse = true

export class Circle {
  constructor(private offset = 0) {}

  draw(p5: P5) {
    const maxSize = getScreenDiameter(p5)

    const size = ((p5.millis()/10) + this.offset) % maxSize

    const wiggle = this.offset > maxSize/2
    ? maxSize - this.offset
    : this.offset

    const delta = Math.sin((p5.millis() - wiggle) * 5e-3) * 10
    const opacity = p5.map(size, 0, maxSize, inverse ? 0 : 255, inverse ? 255 : 0)

    p5.stroke(colours.light, opacity)
    p5.circle(0, 0, size + delta)
  }
}
