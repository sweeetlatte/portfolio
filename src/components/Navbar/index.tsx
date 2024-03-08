import './style.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section cormorant">
        <a href="/">
          <b>
            Thuy <i>L</i>inh -
          </b>{' '}
          <i>A lorem ipsum developer</i>
        </a>
      </div>
      <div className="right-section">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="works">Works</a>
        <a href="contact">Contact</a>
      </div>
    </div>
  );
}
