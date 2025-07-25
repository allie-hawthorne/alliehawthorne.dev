import { About } from '../components/pages/About';
import { Projects } from '../components/pages/Projects';
import { Zen } from '../components/pages/Zen';
import { SplashScreen } from '../components/SplashScreen';

export enum Screen {
  Splash = 'Splash',
  About = 'About',
  Projects = 'Projects',
  Zen = 'Zen',
}

export const screensComponentMap = {
  [Screen.Splash]: <SplashScreen />,
  [Screen.About]: <About />,
  [Screen.Projects]: <Projects />,
  [Screen.Zen]: <Zen />,
}
