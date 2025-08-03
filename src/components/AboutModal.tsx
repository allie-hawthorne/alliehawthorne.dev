import { usePageContext } from '../PageContext'

export const AboutModal = () => {
  const {showModal} = usePageContext();

  return <dialog open={showModal}>
    <p>coming soon....</p>
  </dialog>
}
