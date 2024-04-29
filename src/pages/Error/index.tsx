import routes from 'routes';
import Icons from 'components/Icons';
import './style.scss';

export default function ErrorPage() {
  return (
    <div className='full-scr-flex-container'>
      <div className='error__content'>
        <div className='big-title cormorant'>Page not found</div>
        <div className='link-btn-group'>
          <a href={routes.HOME} className='link-btn'>
            Back to Home <Icons.ArrowUpRight />
          </a>
          <a href={process.env.REACT_APP_RESUME} className='link-btn'>
            See my resumé <Icons.ArrowUpRight />
          </a>
          <a href={routes.WORKS} className='link-btn'>
            My projects <Icons.ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
