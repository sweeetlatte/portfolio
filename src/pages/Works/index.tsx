import ProjectCard from 'components/ProjectCard';
import bakeryImg from 'assets/images/latte_bakery.png';
import sashimiImg from 'assets/images/sashimi_recipe.png';
import rhinoImg from 'assets/images/3d_rhino.png';
import aroundMeImg from 'assets/images/around_me.png';
import bakery3Img from 'assets/images/latte_bakery_3.png';
import './style.scss';

const projects = [
  {
    title: 'Latte Bakery ver 3',
    description:
      'A full-stack website, this is an upgraded version of the Latte Bakery e-commerce platform, currently featuring MongoDB for data storage, ExpressJS for the backend, and Redux for global state management.',
    techStack: ['ReactJS', 'Redux', 'React Router', 'Anime.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Figma'],
    img: bakery3Img,
    liveLink: '',
    sourceLink: 'https://github.com/sweeetlatte/latte-bakery-ver-3',
    inProgress: true,
  },
  {
    title: 'Latte Bakery',
    description:
      'An e-commerce website for Latte Bakery, with some basic features such as product browsing, cart management with Redux, and responsive design for optimal viewing across devices.',
    techStack: ['ReactJS', 'Redux', 'React Router', 'Tailwind CSS', 'Figma'],
    img: bakeryImg,
    liveLink: 'https://latte-bakery.vercel.app/',
    sourceLink: 'https://github.com/sweeetlatte/latte-bakery',
    inProgress: false,
  },
  {
    title: 'Sashimi Recipe',
    description: 'An animated website to showcasing step-by-step instructions for creating a delicious sashimi dish, featuring animations.',
    techStack: ['ReactJS', 'Anime.js'],
    img: sashimiImg,
    liveLink: 'https://sashimi-ver-2-sweeetlatte.vercel.app/',
    sourceLink: 'https://github.com/sweeetlatte/sashimi-ver-2',
    inProgress: false,
  },
  {
    title: '3D Rhino',
    description: 'An interactive website for exhibiting a 3D rhino statue and providing information about rhino.',
    techStack: ['ReactJS', 'three.js', 'React Three Fiber', 'React Three Cannon', 'React Three Drei', 'Theme UI'],
    img: rhinoImg,
    liveLink: 'https://3d-rhino-ts.vercel.app/',
    sourceLink: 'https://github.com/sweeetlatte/3d-rhino-ts',
    inProgress: false,
  },
  {
    title: 'Around Me',
    description: 'An animated landing page showcasing images of destinations within a country.',
    techStack: ['ReactJS', 'React Sping', 'GLTransitions', 'Theme UI'],
    img: aroundMeImg,
    liveLink: 'https://sweeetlatte-around-me.netlify.app/',
    sourceLink: 'https://github.com/sweeetlatte/around-me',
    inProgress: false,
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
          inProgess={prj.inProgress}
        />
      ))}
    </div>
  );
}
