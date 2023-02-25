import me from '../../public/me3.png'
import Image from 'next/image'

function Header() {
  return (
    <header>
      <span className='gj'>
        <svg width='25' height='34' viewBox='0 0 25 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd' clipRule='evenodd' d='M25 34H11V29.0769H19.9091V14.9231H11V10H25V34Z' fill='#333333'/>
          <path fillRule='evenodd' clipRule='evenodd' d='M0 0H14V4.84211H5.09091V18.1579H14V23H0V0Z' fill='#333333'/>
        </svg>
        <span className='gaj'>
          <Image alt='me' src={me} />
        </span>
      </span> 
      GREG JOHNS
    </header>
  );
}

export default Header;
