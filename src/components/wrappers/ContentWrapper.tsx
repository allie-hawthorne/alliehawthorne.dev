import { PropsWithChildren } from 'react';
import './ContentWrapper.css';

export const ContentWrapper = ({ children, text }: PropsWithChildren<{text: string}>) => {
  return (<div className='flex flex-col gap-5'>
    <p className='text-4xl text-center'>{text}</p>
    <div className='hide-scroll max-h-[70dvh] overflow-scroll px-4 md:max-w-4xl'>
      <div className='flex flex-col items-center justify-center flex-1 gap-2'>
        {children}
      </div>
    </div>
  </div>);
}
