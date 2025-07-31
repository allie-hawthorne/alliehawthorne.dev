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
  const {stopGallery, nextBackground, prevBackground, fullscreen, setFullscreen} = usePageContext();

  const [primaryStyles, setPrimaryStyles] = useState('');
  const [secondaryStyles, setSecondaryStyles] = useState('');
  useEffect(() => {
    if (fullscreen) {
      setPrimaryStyles('invisible opacity-0');
      setTimeout(() => setSecondaryStyles('opacity-20'), 500);
      return;
    }
    setSecondaryStyles('');
    setPrimaryStyles('');
  }, [fullscreen]);

  return <div className='flex justify-center relative w-full h-screen'>
    <div className='flex flex-col items-center absolute bottom-10 md:bottom-0 z-10'>
      <div className={`flex items-center justify-around gap-8 ${primaryStyles} ${defaultTransition}`}>
        <Button
          secondary
          className='h-12 w-12'
          icon={ChevronLeft}
          onClick={prevBackground}
          />
        <Button
          className='h-20 w-20'
          icon={StopIcon}
          onClick={stopGallery}
          />
        <Button
          secondary
          className='h-12 w-12'
          icon={ChevronRight}
          onClick={nextBackground}
        />
      </div>
      <div
        className={`${secondaryStyles} ${defaultTransition} flex items-center justify-around gap-8 md:gap-10 mt-2`}
        onMouseEnter={() => setSecondaryStyles('')}
        onMouseLeave={() => fullscreen && setSecondaryStyles('opacity-20')}
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
