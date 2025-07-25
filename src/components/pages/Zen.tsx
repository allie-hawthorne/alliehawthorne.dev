import PauseIcon from 'mdi-react/PauseIcon';
import { Button } from '../Button';
import { usePageContext } from '../../backgrounds/PageContext';

export const Zen = () => {
  const {setZenMode} = usePageContext();
  return <div className='flex justify-center relative w-full h-screen'>
    <Button
      icon={PauseIcon}
      onClick={() => setZenMode(false)}
      className='absolute bottom-10'
    />
  </div>
}
