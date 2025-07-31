import { GalleryBackground } from './components/GalleryBackground';
import { LinksBar } from './components/LinksBar';
import { PageWrapper } from './components/wrappers/PageWrapper';
import { usePageContext } from './PageContext';
import { Screen, screensComponentMap } from './utils/screen';
import { getColDarkCss } from './components/GalleryBackground/animations/shared';

export const defaultTransition = 'transition-all duration-500';

export default function() {
  const {screen, showGallery} = usePageContext()

  const galleryInBackground = showGallery && screen !== Screen.Gallery

  const style = galleryInBackground ? {
    backgroundColor: getColDarkCss(0.8),
    zIndex: 1,
  } : {};

  return (
    <div style={{backgroundColor: getColDarkCss(1)}} className='select-none text-pink-300 font-serif h-[100dvh] flex items-center justify-center flex-col'>
      <GalleryBackground />
      <div style={style} className={`${defaultTransition} absolute w-full h-full flex items-center justify-center flex-col`}>
        <div className='flex items-center justify-center flex-1'>
          {Object.entries(screensComponentMap).map(([screenName, component]) => (
            <PageWrapper key={screenName} display={screen === screenName as Screen}>
              {component}
            </PageWrapper>
          ))}
        </div>
        <LinksBar />
      </div>
    </div>
  );
}
