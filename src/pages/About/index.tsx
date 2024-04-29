import Icons from 'components/Icons';
import img from 'assets/images/home_self_2.jpeg';
import './style.scss';

export default function About() {
  return (
    <div className='about'>
      <div className='about__img'>
        <img src={img} alt='' />
      </div>
      <div className='about__content'>
        <i className='about__name cormorant'>I AM THUY LINH.</i>
        <p className='about__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla
        </p>
        <a
          href='https://drive.google.com/file/d/1MammtjyUSEZJJXAgTmnl-YoX05H5o2Lu/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
          className='link-btn'
        >
          See my resumé <Icons.ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
