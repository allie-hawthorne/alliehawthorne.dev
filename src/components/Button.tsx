import { PropsWithChildren, useCallback, useState } from 'react';
import { defaultTransition } from '../App';
import { MdiReactIconComponentType } from 'mdi-react';

export const pinks = [
  '#f9a8d5', // Hex version of Tailwind color
  '#d98db6',
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: MdiReactIconComponentType;
}
export const Button = ({icon: Icon, className, style, ...props}: ButtonProps) => {
  const [isDown, setIsDown] = useState(false);
  const toggleDown = useCallback(() => setIsDown(p => !p), []);

  return <button
    style={{
      backgroundColor: isDown ? pinks[1] : pinks[0],
      translate: isDown ? '0 1px' : '0 0',
      ...style
    }}
    className={`${defaultTransition} h-20 w-20 bg-pink-300 rounded-full flex items-center justify-center text-black transition-all duration-75 cursor-pointer ${className}` }
    onMouseDown={toggleDown}
    onMouseUp={toggleDown}
    onTouchStart={toggleDown}
    onTouchEnd={toggleDown}
    {...props}
  >
    <Icon className='p-4' size='100%' />
  </button>
}
