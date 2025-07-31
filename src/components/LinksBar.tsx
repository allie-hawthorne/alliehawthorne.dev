import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App'
import { Screen } from '../utils/screen'
import { pinks } from './buttons/Button'
import { getColDarkCss } from './backgrounds/shared'

export const LinksBar = () => {
  const {screen, setScreen, showGallery, fullscreen} = usePageContext()

  const homeScreen = showGallery ? Screen.Gallery : Screen.Splash;
  const opacity = fullscreen ? 'opacity-0' : 'opacity-100';

  const screensMap = {
    about: Screen.About,
    projects: Screen.Projects,
  }

  return <div
    className={`${opacity} ${defaultTransition} flex justify-around w-full text-xl`}
    style={{
      backgroundColor: getColDarkCss(0.9),
      boxShadow: `0 0 100px 100px ${getColDarkCss(0.9)}`,
    }}
  >
    {/* TODO: Sweeping pink boxes when tab is selected */}
    {/* TODO: Re-evaluate colors - maybe have these white, page headers pink and page content white? */}
    {Object.entries(screensMap).map(([name, thisScreen]) => (
      <p
        key={name}
        onClick={() => setScreen(screen !== thisScreen ? thisScreen : homeScreen)}
        className={`${defaultTransition} px-2 pt-0.5 pb-5 cursor-pointer`}
        style={{
          backgroundColor: screen === thisScreen ? pinks[0] : undefined,
          color: screen === thisScreen ? 'black' : undefined
        }}
      >
        {name}
      </p>
    ))}
  </div>;
}
