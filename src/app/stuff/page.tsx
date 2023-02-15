import Image from 'next/image'
import Link from 'next/link';
import nodegardens from '../../../public/genart/ng/nodegardens.jpg'

export default function Stuff() {
  return (
    <>
      <nav>
        <Link href='/'>
          Wrote
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/stuff' className='active'>
          Stuff
        </Link>
      </nav>

      <h3>Art stuff</h3>
      <p>
        A collection of hand drawn, computer illustrations & generative art stuff.
      </p>
      <div className='stuffList'>
        <Link href='../../nodegardens'>
          <section>
            <Image src={nodegardens} alt='me' />
            <div>
              <h6>Node Garden Series</h6>
              <p>Early generative art experiments done in Processing language.</p>
            </div>
          </section>
        </Link>
      </div>
    </>
  )
}
