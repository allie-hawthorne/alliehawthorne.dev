import { usePageContext } from '../../PageContext';
import { Screen } from '../../utils';
import { PageWrapper } from '../wrappers/PageWrapper';
import { animations } from '../../animations';

export const GalleryBackground = () => {
  const {backgroundIndex, screen} = usePageContext();

  return <div
    className="h-full w-full absolute overflow-hidden"
    style={{filter: screen === Screen.Gallery ? undefined : 'blur(2px)'}}
  >
    {animations.map(({component: Component}, index) => (
      <PageWrapper display={index === backgroundIndex} key={index}>
        <Component key={index}/>
      </PageWrapper>
    ))}
  </div>;
};
