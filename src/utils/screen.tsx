import { About } from '../components/pages/About';
import { Projects } from '../components/pages/Projects';
import { SplashScreen } from '../components/SplashScreen';

export enum Screen {
  Splash = 'Splash',
  About = 'About',
  Projects = 'Projects',
}

export const screensComponentMap = {
  [Screen.Splash]: <SplashScreen />,
  [Screen.About]: <About />,
  [Screen.Projects]: <Projects />,
}
