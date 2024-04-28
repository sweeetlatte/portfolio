import ProjectCard from '../../components/ProjectCard';
import bakeryImg from '../../assets/images/latte_bakery.png';
import sashimiImg from '../../assets/images/sashimi_recipe.png';
import rhinoImg from '../../assets/images/3d_rhino.png';
import aroundMeImg from '../../assets/images/around_me.png';
import './style.scss';

const projects = [
  {
    title: 'Latte Bakery',
    description:
      'Project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    techStack: ['ReactJS', 'Redux', 'React Router', 'Tailwind CSS'],
    img: bakeryImg,
    liveLink: 'https://latte-bakery.vercel.app/',
    sourceLink: 'https://github.com/sweeetlatte/latte-bakery',
  },
  {
    title: 'Sashimi Recipe',
    description:
      'Project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    techStack: ['ReactJS', 'Anime.js'],
    img: sashimiImg,
    liveLink: 'https://sashimi-ver-2-sweeetlatte.vercel.app/',
    sourceLink: 'https://github.com/sweeetlatte/sashimi-ver-2',
  },
  {
    title: '3D Rhino',
    description:
      'Project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    techStack: ['ReactJS', 'three.js', 'React Three Fiber', 'React Three Cannon', 'React Three Drei', 'Theme UI'],
    img: rhinoImg,
    liveLink: 'https://3d-rhino-ts.vercel.app/',
    sourceLink: 'https://github.com/sweeetlatte/3d-rhino-ts',
  },
  {
    title: 'Around Me',
    description:
      'Project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    techStack: ['ReactJS', 'React Sping', 'GLTransitions', 'Theme UI'],
    img: aroundMeImg,
    liveLink: 'https://sweeetlatte-around-me.netlify.app/',
    sourceLink: 'https://github.com/sweeetlatte/around-me',
  },
];

export default function Works() {
  return (
    <div className='works'>
      {projects.map((prj, idx) => (
        <ProjectCard
          key={prj.title}
          title={prj.title}
          description={prj.description}
          techStack={prj.techStack}
          img={prj.img}
          liveLink={prj.liveLink}
          sourceLink={prj.sourceLink}
          isOddChild={idx % 2 === 0}
        />
      ))}
    </div>
  );
}
