import PauseIcon from 'mdi-react/PauseIcon';
import { Button } from '../Button';
import { usePageContext } from '../../backgrounds/PageContext';

export const Zen = () => {
  const {leaveZenMode} = usePageContext();
  return <div className='flex justify-center relative w-full h-screen'>
    <Button
      icon={PauseIcon}
      onClick={leaveZenMode}
      className='absolute bottom-10'
    />
  </div>
}
