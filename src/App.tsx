import { CustomBackground } from './components/CustomBackground';
import { LinksBar } from './components/LinksBar';
import { PageWrapper } from './components/PageWrapper';
import { usePageContext } from './backgrounds/PageContext';
import { Screen, screensComponentMap } from './utils/screen';
import { getColDarkCss } from './backgrounds/shared';

export const defaultTransition = 'transition-all duration-500';

export default function() {
  const {screen, zenMode} = usePageContext()

  // TODO: This is dumb, consolidate these
  const isCanvasBackgrounded = screen !== Screen.Zen && zenMode

  const style = isCanvasBackgrounded ? {
    backgroundColor: getColDarkCss(0.8),
    zIndex: 1,
  } : {};

  return (
    <div style={{backgroundColor: getColDarkCss(1)}} className='select-none text-pink-300 font-serif h-[100dvh] flex items-center justify-center flex-col'>
      <CustomBackground />
      <div style={style} className={`${defaultTransition} absolute w-full h-full flex items-center justify-center flex-col`}>
        <div className='flex items-center justify-center flex-1'>
          {Object.entries(screensComponentMap).map(([screenName, component]) => (
            <PageWrapper key={screenName} display={screen === screenName as Screen} className='absolute'>
              {component}
            </PageWrapper>
          ))}
        </div>
        <LinksBar />
      </div>
    </div>
  );
}
