import Icons from '../Icons';
import './style.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  img: string;
  liveLink: string;
  sourceLink: string;
  isOddChild: boolean;
}

export default function ProjectCard({ title, description, techStack, img, liveLink, sourceLink, isOddChild }: ProjectCardProps) {
  return (
    <div className={`project-card${isOddChild ? '' : ' flex-reverse'}`}>
      <div className='project-card__info'>
        <div className='project-card__title'>
          <div className='cormorant'>{title}</div>
          <div className='project-card__link-group'>
            <a href={sourceLink} target='_blank' rel='noreferrer'>
              Source code <Icons.ArrowUpRight />
            </a>
            <a href={liveLink} target='_blank' rel='noreferrer'>
              See website <Icons.ArrowUpRight />
            </a>
          </div>
        </div>
        <div className='cormorant'>{description}</div>
        <div className='project-card__tech-group'>
          {techStack.map((tech) => (
            <div className='project-card__tech'>{tech}</div>
          ))}
        </div>
      </div>
      <div className='project-card__image' style={{ height: '314px', width: '100%' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}
