import { NewTabLink } from './pages/About';
import { data } from '../linkData.json';
import { ShuffleButton } from './ShuffleButton';

export const SplashScreen = () => <div>
  <p className='text-9xl'>allie.</p>
  <div className='flex justify-between'>
    {data.map(({logo, url}, index) => (
      <NewTabLink key={index} href={url} className='flex justify-center gap-2 items-center text-white hover:opacity-80 duration-200'>
        <img src={logo} className='invert w-8' />
      </NewTabLink>
    ))}
  </div>
  <div className='flex justify-center items-center w-full relative'>
    <ShuffleButton />
  </div>
</div>;
