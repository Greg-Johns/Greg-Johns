import Image from 'next/image'
import Link from 'next/link';
import nodegarden from '../../../public/tn_ng.jpg'
import spiral from '../../../public/tn_spiral.jpg'
import crystal from '../../../public/tn_crystal.jpg'
import column from '../../../public/tn_col.jpg'
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


      <h3>The Gardening Series</h3>
      <p>
        A series of Proccessing sketches done years ago in ode to Jared's Node Garden ideas.
      </p>
      <div className='stuffList'>
        <Link href='../../nodegardens'>
          <section>
            <Image src={nodegarden} alt='me' />
            <div className='stuffBlock'>
              <h6>Node Garden Series</h6>
              <p>Early generative art experiments done in Processing language.</p>
            </div>
          </section>
        </Link>
        <Link href='../../crystals'>
          <section>
            <Image src={crystal} alt='me' />
            <div className='stuffBlock'>
              <h6>Crystal Series</h6>
              <p>Early generative art experiments done in Processing language.</p>
            </div>
          </section>
        </Link>
        <Link href='../../sowingseeds'>
          <section>
            <Image src={spiral} alt='me' />
            <div className='stuffBlock'>
              <h6>Waves & Spirals Series</h6>
              <p>Early generative art experiments done in Processing language.</p>
            </div>
          </section>
        </Link>
        <Link href='../../columns'>
          <section>
            <Image src={column} alt='me' />
            <div className='stuffBlock'>
              <h6>Column Series</h6>
              <p>Early generative art experiments done in Processing language.</p>
            </div>
          </section>
        </Link>
      </div>

      <h3>Sketches & Drawings</h3>
      <p>
        A collection of hand drawing and quick sketches I've scribled out and not thrown away.
      </p>
      <div className='stuffList'>
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
