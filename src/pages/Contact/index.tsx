import Icons from 'components/Icons';
import './style.scss';

export default function Contact() {
  return (
    <div className='contact full-scr-flex-container'>
      <div className='contact__content'>
        <div className='big-title cormorant'>
          Let's connect<i>!</i>
        </div>
        <div className='contact__link-group'>
          <div className='contact__email'>
            <div className='contact__link-title'>EMAIL</div>
            <a href='mailto:thuylinh271055@gmail.com'>
              thuylinh271055@gmail.com <Icons.ArrowUpRight />
            </a>
          </div>
          <div className='contact__internet'>
            <div className='contact__link-title'>ON THE INTERNET</div>
            <div className='contact__internet-link'>
              <a href='https://github.com/sweeetlatte' target='_blank' rel='noreferrer'>
                Github <Icons.ArrowUpRight />
              </a>
              <a href='https://linkedin.com/in/linh-thuy' target='_blank' rel='noreferrer'>
                LinkedIn <Icons.ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
