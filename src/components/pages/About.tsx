import { ContentWrapper } from '../wrappers/ContentWrapper';
import { NowPlaying } from '../NowPlaying';
import { useBreakpoints } from '../../utils';
import { data } from '../../linkData.json';
import { defaultTransition } from '../../App';

interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: React.ReactNode
}
export const NewTabLink = ({ href, className, children, ...rest }: LinkProps) => (
  <a className={`${className} ${defaultTransition} text-pink-300 hover:opacity-60`} href={href} target='_blank' rel='noreferrer' {...rest}>
    {children}
  </a>
);
export const About = () => {
  const {md} = useBreakpoints();
  return <ContentWrapper text='about'>
    <div className='flex gap-10 my-4'>
      <SocialLinks />
    </div>
    <div className='flex flex-col' style={{gap: md ? '2em' : '1em'}}>
      {!md && <NowPlaying />}
      <div className='text-white font-sans flex flex-col gap-3'>
        <p className='text-center'>I'm Allie, a Full-Stack Software Engineer, Digital Artist, and Computer Science graduate.</p>
        <ShortHr />
        <p>I've spent over three years working at Music-Tech startup ClicknClear - developing and maintaining their online storefront, licence verification system, admin portal and much more.</p>
        <p>Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.</p>
        <p>You can see all of my open source projects, including this site itself, on my <NewTabLink href='https://github.com/allie-howe'>GitHub</NewTabLink>.</p>
      </div>
    {md && <NowPlaying />}
    </div>
  </ContentWrapper>;
};

const SocialLinks = () => data.map(({logo, url}, index) => (
  <NewTabLink key={index} href={url} className='flex justify-center gap-2 items-center text-white hover:opacity-80 duration-200'>
    <img src={logo} className='invert w-8' />
  </NewTabLink>
));

const ShortHr = () => <div className='grid grid-cols-3'>
  <div />
  <hr className='opacity-30' />
  <div />
</div>
