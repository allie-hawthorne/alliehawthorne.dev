import StopIcon from 'mdi-react/StopIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import HelpIcon from 'mdi-react/HelpIcon';
import FullscreenIcon from 'mdi-react/FullscreenIcon'
import { Button } from '../buttons/Button';
import { usePageContext } from '../../PageContext';
import { defaultTransition } from '../../App';
import { useEffect, useState } from 'react';
import { zIndices } from '../../utils/zIndices';

export const Gallery = () => {
  const {stopGallery, nextBackground, prevBackground, fullscreen, setFullscreen} = usePageContext();

  const [primaryStyles, setPrimaryStyles] = useState('');
  const [secondaryStyles, setSecondaryStyles] = useState('');
  useEffect(() => {
    if (fullscreen) {
      setPrimaryStyles('invisible opacity-0');
      // Secondary bar fades out after everything else, to attract user's attention to it
      // and let them know these buttons are still present
      setTimeout(() => setSecondaryStyles('opacity-20'), 500);
    } else {
      setSecondaryStyles('');
      setPrimaryStyles('');
    }
  }, [fullscreen]);

  return <div className='flex justify-center relative w-full h-screen'>
    <div className={`flex flex-col items-center absolute bottom-10 md:bottom-0 ${zIndices.galleryToolbar}`}>
      <div className={`flex items-center justify-around gap-8 ${primaryStyles} ${defaultTransition}`}>
        <Button className='h-12 w-12'
          secondary
          icon={ChevronLeftIcon}
          onClick={prevBackground}
          />
        <Button className='h-20 w-20'
          icon={StopIcon}
          onClick={stopGallery}
          />
        <Button className='h-12 w-12'
          secondary
          icon={ChevronRightIcon}
          onClick={nextBackground}
        />
      </div>
      <div className={`${secondaryStyles} ${defaultTransition} flex items-center justify-around gap-8 md:gap-10 mt-2`}
        onMouseEnter={() => setSecondaryStyles('')}
        onMouseLeave={() => fullscreen && setSecondaryStyles('opacity-20')}
      >
        <Button className='h-8 w-8'
          secondary
          icon={HelpIcon}
          onClick={() => {}}
        />
        <Button className='h-8 w-8'
          secondary
          icon={FullscreenIcon}
          onClick={() => setFullscreen(prev => !prev)}
        />
      </div>
    </div>
  </div>
}
