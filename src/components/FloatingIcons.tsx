import FullscreenExitIcon from 'mdi-react/FullscreenExitIcon'
import FullscreenIcon from 'mdi-react/FullscreenIcon'
import { ShuffleButton } from './ShuffleButton'
import { usePageContext } from '../PageContext'

// TODO: Delete

export const FloatingIcons = () => {
  const {showGallery, backgroundIndex} = usePageContext();

  return <div className='absolute right-5 top-5'>
    <div className='flex flex-col items-end gap-4'>
      {!showGallery && <ShuffleButton />}
      {backgroundIndex !== 0 && <Toolbar />}
    </div>
  </div>
};

const Toolbar = () => {
  const {showGallery, setShowGallery} = usePageContext();

  return (
    <div className='flex flex-col gap-2 text-gray-300 bg-gray-600 bg-opacity-50 rounded-full p-2'>
      <div onClick={() => setShowGallery(p => !p)}>
        {showGallery ? <FullscreenExitIcon /> :  <FullscreenIcon />}
      </div>
    </div>
  )
};
