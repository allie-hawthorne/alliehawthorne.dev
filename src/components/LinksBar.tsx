import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App'
import { getDarkCss, Screen } from '../utils'
import { zIndices } from '../utils/zIndices';

const screensMap = {
  about: Screen.About,
  projects: Screen.Projects,
};

export const LinksBar = () => {
  const {showGallery, fullscreen} = usePageContext()

  const homeScreen = showGallery ? Screen.Gallery : Screen.Splash;
  const opacity = fullscreen ? 'opacity-0' : 'opacity-100';

  return <div className={`${opacity} ${defaultTransition} flex justify-around gap-5 w-full text-xl`}
    style={{
      backgroundColor: getDarkCss(0.9),
      boxShadow: `0 0 100px 100px ${getDarkCss(0.9)}`,
    }}
  >
    {Object.entries(screensMap).map((s, i) => (
      <ScreenLink key={i} screenData={s} homeScreen={homeScreen} />
    ))}
  </div>;
}

interface ScreenLinkProps {
  screenData: [string, Screen]
  homeScreen: Screen
}
const ScreenLink = ({homeScreen, screenData: screenData}: ScreenLinkProps) => {
  const [name, thisScreen] = screenData;
  const {screen, setScreen} = usePageContext()

  const isScreenActive = screen === thisScreen;
  const textColour = isScreenActive ? 'text-black' : undefined;

  const changeActiveScreen = () => setScreen(isScreenActive ? homeScreen : thisScreen);

  return <button className={`${defaultTransition} ${textColour} px-2 pt-0.5 pb-5 cursor-pointer overflow-hidden relative`} onClick={changeActiveScreen}>
    <div className={`absolute inset-0 bg-pink-300 origin-bottom ${defaultTransition} ${isScreenActive ? 'scale-y-100' : 'scale-y-0'}`} />
    {/* This is dumb but just having one element with position: absolute deprives the button of its width */}
    <p className='opacity-0' aria-hidden>{name}</p>
    <p className={`absolute inset-0 ${zIndices.pageLinkText}`}>{name}</p>
  </button>
}
