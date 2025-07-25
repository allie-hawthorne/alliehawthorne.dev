import { usePageContext } from '../backgrounds/PageContext'
import { defaultTransition } from '../App'
import { Screen } from '../utils/screen'
import { pinks } from './ShuffleButton'

export const LinksBar = () => {
  const {screen, setScreen} = usePageContext()

  const screensMap = {
    about: Screen.About,
    projects: Screen.Projects,
  }

  return (
    <div className='flex justify-around w-full text-xl'>
      {/* TODO: Sweeping pink boxes when tab is selected */}
      {/* TODO: Re-evaluate colors - maybe have these white, page headers pink and page content white? */}
      {Object.entries(screensMap).map(([name, thisScreen]) => (
        <p
          key={name}
          onClick={() => setScreen(screen !== thisScreen ? thisScreen : Screen.Splash)}
          className={`${defaultTransition} px-2 pt-0.5 pb-5 cursor-pointer`}
          style={{
            backgroundColor: screen === thisScreen ? pinks[0] : undefined,
            color: screen === thisScreen ? 'black' : undefined
          }}
        >
          {name}
        </p>
      ))}
    </div>
  )
}
