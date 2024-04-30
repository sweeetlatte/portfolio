import Icons from 'components/Icons';
import img from 'assets/images/about_self_3.jpeg';
import './style.scss';

export default function About() {
  return (
    <div className='about'>
      <div className='about__img'>
        <img src={img} alt='' loading='lazy' />
      </div>
      <div className='about__content'>
        <div className='about__name cormorant'>
          <i>I'm Thuy Linh.</i>
        </div>
        <div className='about__name cormorant'>
          <i>A user interface enthusiast.</i>
        </div>
        <div className='about__text'>
          <p>
            The blend of UX/UI design and technology has always charmed me. I've been fascinated by the process of crafting user interfaces,
            whether through design or development.
          </p>
          <p>
            My web development journey began without designs, but soon I realized my desire to create a complete website from concept to
            polished product. So I dived into courses about UI/UX design and HTML/CSS, JavaScript, then ReactJS, equipping myself with the
            necessary skills to design and develop websites independently.
          </p>
          <p>
            As my projects expanded in scope, I recognized the great amount of knowledge required to create visually appealing and
            user-friendly websites. Therefore, I'm focusing on deepening my expertise in ReactJS and its ecosystem. Additionally,
            recognizing the essential role of backend development in this journey, I'm expanding my knowledge in NodeJS and its ecosystem to
            create engaging and user-centric experiences.
          </p>
          <p>
            My journey is just beginning, and I'm continuously enhancing my skills and knowledge to pave a bright and delightful path ahead.
          </p>
        </div>
        <a href={process.env.REACT_APP_RESUME} target='_blank' rel='noreferrer' className='link-btn'>
          See my resumé <Icons.ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
