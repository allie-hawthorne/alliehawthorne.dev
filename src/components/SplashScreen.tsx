import { ShuffleButton } from './ShuffleButton';

export const SplashScreen = () => <div className='h-screen flex flex-col justify-evenly'>
  <p className='text-9xl'>allie.</p>
  <div className='flex justify-center items-center w-full mt-20'>
    <ShuffleButton />
  </div>
</div>;
