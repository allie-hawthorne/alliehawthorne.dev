import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App'
import { getDarkCss, Screen } from '../utils'

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
    {Object.entries(screensMap).map(([name, thisScreen]) => {
      const screenActive = screen === thisScreen;
      const textColour = screenActive ? 'text-black' : undefined

      return <button className={`${defaultTransition} ${textColour} px-2 pt-0.5 pb-5 cursor-pointer overflow-hidden relative`}
        key={name}
        onClick={() => setScreen(screenActive ? homeScreen : thisScreen)}
      >
        <div className={`absolute inset-0 bg-pink-300 origin-bottom ${defaultTransition} ${screenActive ? 'scale-y-100' : 'scale-y-0'}`} />
        {/* This is dumb but just having one element with position: absolute deprives the button of its width */}
        <p className='opacity-0' aria-hidden>{name}</p>
        <p className='absolute inset-0'>{name}</p>
      </button>
    })}
  </div>;
}
