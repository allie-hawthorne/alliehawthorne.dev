import GithubIcon from 'mdi-react/GithubIcon'
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon'
import FileAccountIcon from 'mdi-react/FileAccountIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import { ContentWrapper } from '../wrappers/ContentWrapper';
import { NowPlaying } from '../NowPlaying';
import { useBreakpoints } from '../../utils';
import { defaultTransition } from '../../App';

const data = [
  {
    url: "https://www.github.com/allie-howe",
    Logo: GithubIcon
  },
  {
    url: "mailto:howeisallie@gmail.com",
    Logo: EmailOutlineIcon
  },
  {
    url: "/docs/cv-jan-2026.pdf",
    Logo: FileAccountIcon
  },
  {
    url: "https://www.linkedin.com/in/allie-howe",
    Logo: LinkedinIcon
  }
]


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
        <p>I've spent over three years working at Music-Tech startup ClicknClear - developing and maintaining their music licensing storefront, licence verification system, admin portal and much more.</p>
        <p>I also enjoy playing around with various technologies - from creative coding to learning new frameworks/libraries - and more.</p>
        <p>You can see all of my open source projects, including this site itself, on my <NewTabLink href='https://github.com/allie-howe'>GitHub</NewTabLink>.</p>
      </div>
    {md && <NowPlaying />}
    </div>
  </ContentWrapper>;
};

const SocialLinks = () => data.map(({Logo, url}, index) => (
  <NewTabLink className='flex justify-center gap-2 items-center duration-200' key={index} href={url}>
    <Logo className='text-white opacity-70' size='2.5rem' />
  </NewTabLink>
));

const ShortHr = () => <div className='grid grid-cols-3'>
  <div />
  <hr className='opacity-30' />
  <div />
</div>
