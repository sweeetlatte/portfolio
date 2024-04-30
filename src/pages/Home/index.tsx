import routes from 'routes';
import Icons from 'components/Icons';
import './style.scss';

export default function Home() {
  return (
    <div className='home'>
      <div className='full-scr-flex-container gradient-bg_to-bottom'>
        <div className='home__hero-section'>
          <div className='big-title cormorant'>
            Hi, I’m a <i>Frontend</i> Developer
          </div>
          <div className='link-btn-group'>
            <a href={process.env.REACT_APP_RESUME} target='_blank' rel='noreferrer' className='link-btn'>
              See my resumé <Icons.ArrowUpRight />
            </a>
            <a href={routes.ABOUT} className='link-btn'>
              More about me <Icons.ArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className='full-scr-flex-container relative-container gradient-bg_to-top'>
        <div className='home__work-section'>
          <div className='home__work-banner cormorant'>
            <div className='home__work-adjectives'>
              <span>
                <i>O</i>pen-minded.&nbsp;
              </span>
              <span>
                <i>C</i>urious.&nbsp;
              </span>
              <span>
                <i>V</i>ersatile.&nbsp;
              </span>
            </div>
            <div className='home__work-adjectives'>
              <span>
                <i>O</i>pen-minded.&nbsp;
              </span>
              <span>
                <i>C</i>urious.&nbsp;
              </span>
              <span>
                <i>V</i>ersatile.&nbsp;
              </span>
            </div>
          </div>
          <div className='big-title cormorant'>See what I've been working on</div>
          <a href={routes.WORKS} className='link-btn'>
            My projects <Icons.ArrowUpRight />
          </a>
          <a href='mailto:thuylinh271055@gmail.com' className='home__talk-btn cormorant'>
            Let's talk<i>!</i>
          </a>
        </div>
      </div>
    </div>
  );
}
