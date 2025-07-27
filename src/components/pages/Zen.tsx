import PauseIcon from 'mdi-react/PauseIcon';
import ChevronRight from 'mdi-react/ChevronRightIcon';
import ChevronLeft from 'mdi-react/ChevronLeftIcon';
import Help from 'mdi-react/HelpIcon';
import FullscreenIcon from 'mdi-react/FullscreenIcon'
import { Button } from '../Button';
import { usePageContext } from '../../backgrounds/PageContext';

export const Zen = () => {
  const {leaveZenMode, nextBackground, prevBackground} = usePageContext();

  return <div className='flex justify-center relative w-full h-screen'>
    <div className='flex flex-col items-center absolute bottom-0'>
      <div className='flex items-center justify-around gap-8'>
        <Button
          secondary
          className='h-12 w-12'
          icon={ChevronLeft}
          onClick={prevBackground}
          />
        <Button
          icon={PauseIcon}
          onClick={leaveZenMode}
          />
        <Button
          secondary
          className='h-12 w-12'
          icon={ChevronRight}
          onClick={nextBackground}
        />
      </div>
      <div className='flex items-center justify-around gap-10 mt-2'>
        <Button
          secondary
          className='h-8 w-8'
          icon={Help}
          onClick={() => {}}
        />
        <Button
          secondary
          className='h-8 w-8'
          icon={FullscreenIcon}
          onClick={() => {}}
        />
      </div>
    </div>
  </div>
}
