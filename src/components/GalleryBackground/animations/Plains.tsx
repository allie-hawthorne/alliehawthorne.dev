import { getDarkCss } from '../../../utils/colourUtils';

export const PlainBlack = () => (
  <div className='w-full h-full' style={{backgroundColor: getDarkCss(1)}} />
);
