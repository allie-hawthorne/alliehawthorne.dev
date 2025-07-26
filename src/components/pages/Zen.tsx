import PauseIcon from 'mdi-react/PauseIcon';
import ChevronRight from 'mdi-react/ChevronRightIcon';
import ChevronLeft from 'mdi-react/ChevronLeftIcon';
import { Button } from '../Button';
import { usePageContext } from '../../backgrounds/PageContext';

export const Zen = () => {
  const {leaveZenMode, nextBackground, prevBackground} = usePageContext();

  return <div className='flex justify-center relative w-full h-screen'>
    <div className='flex items-center justify-around absolute bottom-10 gap-8'>
      <Button
        secondary
        className='h-16 w-16'
        icon={ChevronLeft}
        onClick={prevBackground}
        />
      <Button
        icon={PauseIcon}
        onClick={leaveZenMode}
        />
      <Button
        secondary
        className='h-16 w-16'
        icon={ChevronRight}
        onClick={nextBackground}
      />
    </div>
  </div>
}
