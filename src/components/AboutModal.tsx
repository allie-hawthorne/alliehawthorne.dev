import { useEffect, useState } from 'react';
import galleryData from '../galleryInfo.json'
import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App';
import { zIndices } from '../utils/zIndices';
import { getDarkCss } from '../utils';

export const AboutModal = () => {
  const {showModal, setShowModal} = usePageContext();
  const [styles, setStyles] = useState('invisible opacity-0');

  // TODO: Share all of these where possible
  useEffect(() => {
    setStyles(showModal
      ? ''
      : 'invisible opacity-0'
    );
  }, [showModal]);

  // Change this when populating info
  const itemData = galleryData[0]
  if (!itemData) return null;

  const {description, name, year} = itemData

  // TODO: Try out using <dialog> here (I couldn't get transition/background to work nicely)
  return <div className={`${defaultTransition} ${styles} ${zIndices.aboutModal} absolute inset-0 flex justify-center items-end p-16`} onClick={() => setShowModal(false)}>
    <div className='flex flex-col gap-2 justify-center rounded-lg w-64 p-2 aspect-video text-white font-sans' style={{backgroundColor: getDarkCss(), boxShadow: `0 0 20px #FFF6`}}>
      <div>
        <p>{name}</p>
        <p className='text-pink-300'>{year}</p>
      </div>
      <p>{description}</p>
    </div>
  </div>;
}
