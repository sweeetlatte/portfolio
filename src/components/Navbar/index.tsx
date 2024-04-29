import { useLocation } from 'react-router-dom';
import routes from 'routes';
import Icons from 'components/Icons';
import './style.scss';

export default function Navbar() {
  const location = useLocation();

  const links = [
    {
      path: routes.HOME,
      title: 'Home',
    },
    {
      path: routes.ABOUT,
      title: 'About',
    },
    {
      path: routes.WORKS,
      title: 'Works',
    },
    {
      path: routes.CONTACT,
      title: 'Contact',
    },
  ];

  return (
    <div className='navbar'>
      <div className='left-section cormorant'>
        <a href={routes.HOME}>
          <Icons.Logo />
        </a>
      </div>
      <div className='right-section'>
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={
              location.pathname === routes.HOME && location.pathname === link.path
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
