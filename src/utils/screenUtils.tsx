import { About, Projects, Gallery, SplashScreen } from '../components/pages';

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
