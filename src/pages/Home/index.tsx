import Icons from '../../components/Icons';
import img from '../../assets/images/img_holder.jpg';
import './style.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="home__full-scr-flex-container gradient-bg_to-bottom">
        <div className="home__hero-section">
          <div className="home__big-title cormorant">I’M A FRONTEND DEVELOPER</div>
          <div className="home__link-group">
            <a href="/" className="home__link-btn">
              Resumé <Icons.ArrowUpRight />
            </a>
            <a href="work" className="home__link-btn">
              Projects <Icons.ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
      <div className="home__summary-section">
        <div className="home__summary-img">
          <img src={img} alt="" />
        </div>
        <div className="home__summary-content">
          <i className="home__summary-title cormorant">I AM THUY LINH.</i>
          <p className="home__summary-text cormorant">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla
          </p>
          <a href="/" className="home__link-btn">
            More about me <Icons.ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="home__full-scr-flex-container relative-container gradient-bg_to-top">
        <div className="home__work-section">
          <div className="home__work-banner cormorant">
            <i>K</i>IND <i>W</i>ORDS.
          </div>
          <div className="home__big-title cormorant">I HAVE WORKED LOREM IPSUM LOREM IPSUM</div>
          <a href="work" className="home__link-btn">
            My projects <Icons.ArrowUpRight />
          </a>
          <div className="home__talk-btn cormorant">LET’S TALK</div>
        </div>
      </div>
    </div>
  );
}
