import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { defaultTransition } from '../App';
import { MdiReactIconComponentType } from 'mdi-react';

export const pinks = [
  '#f9a8d5', // Hex version of Tailwind color
  '#d98db6',
];

export const blacks = [
  '#222222',
  '#202020',
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: MdiReactIconComponentType;
  secondary?: boolean;
}
export const Button = ({icon: Icon, secondary, className, style, ...props}: ButtonProps) => {
  const [isDown, setIsDown] = useState(false);
  const toggleDown = useCallback(() => setIsDown(p => !p), []);

  const {backgroundColor, color} = useMemo(() => {
    const bgPalette = secondary ? blacks : pinks;
    const textPalette = secondary ? pinks : blacks;

    return {
      backgroundColor: isDown ? bgPalette[1] : bgPalette[0],
      color: isDown ? textPalette[1] : textPalette[0]
    };
  }, [isDown, secondary]);

  return <button
    style={{
      color,
      backgroundColor,
      translate: isDown ? '0 1px' : '0 0',
      ...style
    }}
    className={`${defaultTransition} h-20 w-20 rounded-full flex items-center justify-center transition-all duration-75 cursor-pointer ${className}` }
    onMouseDown={toggleDown}
    onMouseUp={toggleDown}
    onTouchStart={toggleDown}
    onTouchEnd={toggleDown}
    {...props}
  >
    <Icon className='p-[20%]' size='100%' />
  </button>
}
