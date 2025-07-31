import { getColDarkCss } from '../../../utils/shared';

export const PlainBlack = () => (
  <div className='w-full h-full' style={{backgroundColor: getColDarkCss(1)}} />
);
