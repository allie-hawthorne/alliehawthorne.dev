import projects from '../../projects.json'
import { ContentWrapper } from '../wrappers/ContentWrapper';

type Project = typeof projects[0];
const sharedStyles = 'md:w-[400px] rounded-xl growOnHoverItem duration-200'

export const Projects = () => <ContentWrapper text='projects'>
  <div className='grid gap-20 grid-cols-1 flex-col'>
    {projects.map((project, index) => <Project key={index} project={project} />)}
  </div>
</ContentWrapper>;

// TODO: Downscale images to improve performance
// TODO: Hard-code width of images to reduce layout shift
const Project = ({ project }: {project: Project}) => (
  <div className='flex flex-col md:flex-row gap-x-5 gap-y-2 growOnHoverWrap'>
    {
      project.imgUrl.includes('webm')
        ? <video disableRemotePlayback className={`${sharedStyles}`} autoPlay loop muted>
          <source src={`images/previews/${project.imgUrl}`} type='video/webm' />
        </video>
        : <img loading="lazy" className={`${sharedStyles}`} src={`images/previews/${project.imgUrl}`} />
    }
    <div className='flex flex-col gap-5 justify-between'>
      <div>
        <p className='text-2xl'>{project.name}</p>
        <p className='font-sans text-white'>{project.description}</p>
      </div>
      {project.buttons.map((button, index) => (
        <a key={index} className='text-black rounded-md text-lg bg-pink-300 hover:bg-pink-400 duration-500 p-1 block text-center' href={button.url} target='_blank' rel='noreferrer'>
          {button.title}
        </a>
      ))}
    </div>
  </div>
);
