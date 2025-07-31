import { About } from '../components/pages/About';
import { Projects } from '../components/pages/Projects';
import { Gallery } from '../components/pages/Gallery';
import { SplashScreen } from '../components/SplashScreen';

export enum Screen {
  Splash = 'Splash',
  About = 'About',
  Projects = 'Projects',
  Gallery = 'Gallery',
}

export const screensComponentMap = {
  [Screen.Splash]: <SplashScreen />,
  [Screen.About]: <About />,
  [Screen.Projects]: <Projects />,
  [Screen.Gallery]: <Gallery />,
}
