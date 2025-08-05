import { Checkers, CirclesAndLines, ContrastingCircles, Ellipses, GameOfLife, PerlinGrid, RotatingPlus, RotatingTriangles, SquareClover, TwinCircles, GrowingCircles } from './components/GalleryBackground/animations';
import { NoGallery } from './components/GalleryBackground/NoGallery';

// TODO: Implement lazy loading for these components? This would also help with resizing issues
export const animations = [
  {
    name: "",
    year: 0,
    description: [""],
    component: NoGallery
  },
  {
    name: "perlin grid",
    year: 2025,
    description: [
      "I've experimented with Perlin noise a couple times, but this is the first time I've made something I loved.",
      "We're travelling through three dimensions of Perlin noise, visualising values as squares of varying size and hue depending on the value.",
      "I also added GUI controls to let you mess around with various settings - have a play around!"
    ],
    component: PerlinGrid
  },
  {
    name: "checkers",
    year: 2019,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: Checkers
  },
  {
    name: "ellipses",
    year: 2022,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: Ellipses
  },
  {
    name: "contrasting circles",
    year: 2019,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: ContrastingCircles
  },
  {
    name: "twin circles",
    year: 2023,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: TwinCircles
  },
  {
    name: "growing circles",
    year: 2024,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: GrowingCircles
  },
  {
    name: "rotating triangles",
    year: 2019,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: RotatingTriangles
  },
  {
    name: "rotating pluses",
    year: 2022,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: RotatingPlus
  },
  {
    name: "circles and lines",
    year: 2019,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: CirclesAndLines
  },
  {
    name: "game of life",
    year: 2023,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: GameOfLife
  },
  {
    name: "square clover",
    year: 2023,
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!"],
    component: SquareClover
  }
]
