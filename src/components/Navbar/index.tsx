import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from 'routes';
import Icons from 'components/Icons';
import './style.scss';

export default function Navbar() {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      {width >= 500 ? (
        <div className='navbar__left-section cormorant'>
          <a href={routes.HOME}>
            <Icons.Logo />
          </a>
        </div>
      ) : (
        <></>
      )}
      <div className='navbar__right-section'>
        {width >= 500 ? (
          <>
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
          </>
        ) : (
          <>
            <a href={routes.HOME} className={location.pathname === routes.HOME ? 'navbar__home_active' : ''}>
              <Icons.LogoSquared />
            </a>
            {links
              .filter((item) => item.path !== routes.HOME)
              .map((link) => (
                <a key={link.path} href={link.path} className={location.pathname.slice(1).includes(link.path) ? 'active' : ''}>
                  {link.title}
                </a>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
