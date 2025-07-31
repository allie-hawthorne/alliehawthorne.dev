import StopIcon from 'mdi-react/StopIcon';
import ChevronRight from 'mdi-react/ChevronRightIcon';
import ChevronLeft from 'mdi-react/ChevronLeftIcon';
import Help from 'mdi-react/HelpIcon';
import FullscreenIcon from 'mdi-react/FullscreenIcon'
import { Button } from '../Button';
import { usePageContext } from '../../PageContext';
import { defaultTransition } from '../../App';
import { useEffect, useState } from 'react';

export const Zen = () => {
  const {leaveZenMode, nextBackground, prevBackground, fullscreen, setFullscreen} = usePageContext();

  const primaryOpacity = fullscreen ? 'opacity-0' : '';

  const [secondaryOpacity, setSecondaryOpacity] = useState('');
  useEffect(() => {
    if (fullscreen) setTimeout(() => setSecondaryOpacity('opacity-20'), 500);
    else setSecondaryOpacity('')
  }, [fullscreen]);


  return <div className='flex justify-center relative w-full h-screen'>
    <div className='flex flex-col items-center absolute bottom-10 md:bottom-0 z-10'>
      <div className={`flex items-center justify-around gap-8 ${primaryOpacity} ${defaultTransition}`}>
        <Button
          secondary
          className='h-12 w-12'
          icon={ChevronLeft}
          onClick={prevBackground}
          />
        <Button
          className='h-20 w-20'
          icon={StopIcon}
          onClick={leaveZenMode}
          />
        <Button
          secondary
          className='h-12 w-12'
          icon={ChevronRight}
          onClick={nextBackground}
        />
      </div>
      <div
        className={`${secondaryOpacity} ${defaultTransition} flex items-center justify-around gap-8 md:gap-10 mt-2`}
        onMouseEnter={() => setSecondaryOpacity('')}
        onMouseLeave={() => setSecondaryOpacity('opacity-20')}
      >
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
          onClick={() => setFullscreen(prev => !prev)}
        />
      </div>
    </div>
  </div>
}
