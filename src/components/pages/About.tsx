import { ContentWrapper } from './ContentWrapper';
import { NowPlaying } from '../NowPlaying';
import { useBreakpoints } from '../../utils/breakpointUtils';
import { data } from '../../linkData.json';

interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: React.ReactNode
}
export const NewTabLink = ({ href, className, children, ...rest }: LinkProps) => (
  <a className={`${className} text-pink-300`} href={href} target='_blank' rel='noreferrer' {...rest}>
    {children}
  </a>
);
export const About = () => {
  const {md} = useBreakpoints();
  return <ContentWrapper text='about'>
    <div className='flex gap-10 my-4'>
      {data.map(({logo, url}, index) => (
        <NewTabLink key={index} href={url} className='flex justify-center gap-2 items-center text-white hover:opacity-80 duration-200'>
          <img src={logo} className='invert w-8' />
        </NewTabLink>
      ))}
    </div>
    <div className='flex flex-col' style={{gap: md ? '2em' : '1em'}}>
      {!md && <NowPlaying />}
      <div className='text-white font-sans flex flex-col gap-3'>
        <p>I'm Allie Howe, a Full-Stack Software Engineer and Computer Science BSc (First Class, Hons.) graduate from the University of Lincoln.</p>
        <p>I've spent the last more than three years working at Music-Tech startup ClicknClear, furthering and maintaining their online storefront, Licence Verification System, and much more.</p>
        <p>Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.</p>
        <p>You can see all of my open source projects, including this site itself, on my <NewTabLink href='https://github.com/allie-howe'>GitHub</NewTabLink>.</p>
      </div>
    {md && <NowPlaying />}
    </div>
  </ContentWrapper>;
};
