import { getColDarkCss } from '../../../utils/colourUtils';

export const PlainBlack = () => (
  <div className='w-full h-full' style={{backgroundColor: getColDarkCss(1)}} />
);
