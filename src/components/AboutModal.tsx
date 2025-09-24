import { useEffect, useState } from 'react';
import { animations } from '../animations'
import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App';
import { zIndices } from '../utils/zIndices';
import { getDarkCss } from '../utils';
import { ItemInfo } from './ItemInfo';

export const AboutModal = () => {
  const {backgroundIndex, showModal, setShowModal} = usePageContext();
  const [styles, setStyles] = useState('invisible opacity-0');

  // TODO: Share all of these where possible
  useEffect(() => {
    setStyles(showModal
      ? ''
      : 'invisible opacity-0'
    );
  }, [showModal]);

  const animation = animations[backgroundIndex];

  if (!animation) return null;

  // TODO: Try out using <dialog> here (I couldn't get transition/background to work nicely)
  return <div className={`${defaultTransition} ${styles} ${zIndices.aboutModal} absolute inset-0 flex justify-center items-end pb-[6.5rem] md:pb-16 px-4`} onClick={() => setShowModal(false)}>
    <div className='flex flex-col gap-2 justify-center rounded-lg max-w-lg p-4' style={{backgroundColor: getDarkCss(), boxShadow: `0 0 20px #FFF6`}}>
      <ItemInfo {...animation} />
    </div>
  </div>;
}
