import { getDarkCss } from '../../../utils';

// TODO: Just merge this in, it doesn't need to be a custom background
export const PlainBlack = () => (
  <div className='w-full h-full' style={{backgroundColor: getDarkCss(1)}} />
);
