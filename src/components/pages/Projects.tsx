import projects from '../../projects.json'
import { ItemInfo } from '../ItemInfo';
import { ContentWrapper } from '../wrappers/ContentWrapper';
import { NewTabLink } from './About';

type Project = typeof projects[0];

export const Projects = () => <ContentWrapper text='projects'>
  <div className='grid gap-20 grid-cols-1 flex-col'>
    {projects.map((project, index) => <Project key={index} project={project} />)}
  </div>
</ContentWrapper>;

// TODO: Downscale images to improve performance
// TODO: Hard-code width of images to reduce layout shift
const Project = ({ project }: {project: Project}) => (
  <div className='flex flex-col md:flex-row gap-x-5 gap-y-2 growOnHoverWrap'>
    <img loading="lazy" className='md:w-[400px] rounded-xl growOnHoverItem duration-200' src={`images/previews/${project.imgUrl}`} />
    <div className='flex flex-col gap-5 justify-between'>
      <div className='w-full'>
        <ItemInfo {...project} />
      </div>
      {project.buttons.map((button, index) => (
        <NewTabLink className='rounded-md text-lg bg-pink-300 hover:bg-pink-400 duration-500 p-1 block text-center' style={{color: 'black'}} key={index} href={button.url}>
          {button.title}
        </NewTabLink>
      ))}
    </div>
  </div>
);
