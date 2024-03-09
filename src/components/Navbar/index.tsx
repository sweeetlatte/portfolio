import { useLocation } from 'react-router-dom';
import './style.scss';

export default function Navbar() {
  const location = useLocation();

  const links = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: 'about',
      title: 'About',
    },
    {
      path: 'works',
      title: 'Works',
    },
    {
      path: 'contact',
      title: 'Contact',
    },
  ];

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
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={
              location.pathname === '/' && location.pathname === link.path
                ? 'active'
                : location.pathname.slice(1).includes(link.path)
                ? 'active'
                : ''
            }
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
