import Image from 'next/image'
import Link from 'next/link';
import nodegardens from '../../../public/genart/ng/nodegardens.jpg'
import p5 from '../../../public/tmb_p5.jpg'
import sites from '../../../public/sites.jpg'
import drawings from '../../../public/drawings.jpg'

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


      <h3>Stuff</h3>
      <p>
        A collection of hand drawings, computer illustrations, designs & generative art stuff.
      </p>
      <div className='stuffList'>
        <Link href='../../sketches'>
          <section>
            <Image src={p5} alt='me' />
            <div className='stuffBlock'>
              <h6>Nothing here...</h6>
              <p>Except a page to get p5 setup and working on the site and hopefully more generative experiments to come.</p>
            </div>
          </section>
        </Link>
        <Link href='../../nodegardens'>
          <section>
            <Image src={nodegardens} alt='me' />
            <div className='stuffBlock'>
              <h6>Node Garden Series</h6>
              <p>Early generative art experiments done in Processing language.</p>
            </div>
          </section>
        </Link>
        <Link href='../../drawings'>
          <section>
            <Image src={drawings} alt='me' />
            <div className='stuffBlock'>
              <h6>Drawings</h6>
              <p>Some way back drawings and stuff</p>
            </div>
          </section>
        </Link>
      </div>
    </>
  )
}
