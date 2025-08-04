import { usePageContext } from '../PageContext'
import { defaultTransition } from '../App';
import { useEffect, useState } from 'react';
import { zIndices } from '../utils/zIndices';

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

  // TODO: Try out using <dialog> here (I couldn't get transition/background to work nicely)
  return <div className={`${defaultTransition} ${styles} ${zIndices.aboutModal} bg-opacity-80 absolute inset-0 bg-black flex justify-center items-center`} onClick={() => setShowModal(false)}>
    <div>
      <p>coming soon....</p>
    </div>
  </div>;
}
