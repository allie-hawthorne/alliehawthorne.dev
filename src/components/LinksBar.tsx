import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App'
import { getDarkCss, Screen } from '../utils'
import { pinks } from './buttons/Button'

const screensMap = {
  about: Screen.About,
  projects: Screen.Projects,
};

export const LinksBar = () => {
  const {screen, setScreen, showGallery, fullscreen} = usePageContext()

  const homeScreen = showGallery ? Screen.Gallery : Screen.Splash;
  const opacity = fullscreen ? 'opacity-0' : 'opacity-100';

  return <div className={`${opacity} ${defaultTransition} flex justify-around w-full text-xl`}
    style={{
      backgroundColor: getDarkCss(0.9),
      boxShadow: `0 0 100px 100px ${getDarkCss(0.9)}`,
    }}
  >
    {/* TODO: Sweeping pink boxes when tab is selected */}
    {/* TODO: Re-evaluate colors - maybe have these white, page headers pink and page content white? */}
    {Object.entries(screensMap).map(([name, thisScreen]) => (
      <button className={`${defaultTransition} px-2 pt-0.5 pb-5 cursor-pointer`}
        key={name}
        onClick={() => setScreen(screen !== thisScreen ? thisScreen : homeScreen)}
        style={{
          backgroundColor: screen === thisScreen ? pinks[0] : undefined,
          color: screen === thisScreen ? 'black' : undefined
        }}
      >
        {name}
      </button>
    ))}
  </div>;
}
