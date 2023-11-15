import Image from 'next/image'
import Link from 'next/link';
import '../comics.css'

import hero from '../../../public/stuff/tn_heroes.jpg'
import sketchbook from '../../../public/stuff/tn_sketches.jpg'
import sites from '../../../public/stuff/tn_sites.gif'
import marks from '../../../public/stuff/tn_mark.jpg'
import cartoons from '../../../public/stuff/tn_cartoons.jpg'
import screens from '../../../public/stuff/tn_screens.jpg'
import wide1 from '../../../public/stuff/230x132.jpg'
import wide2 from '../../../public/stuff/230x113.jpg'

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

      <div>
        <p>
          A selection of designs, drawings, sketches, paintings, concept art, cartoons and whatever else I’ve put some creative energy into that makes me feel good.
        </p>
        <div className='comic_pg'>

          <div className='hero'>
            <p>hero</p>
          </div>

          <div className='ng1'>
            <p>ng1</p>
          </div>

          <div className='ng2'>
            <p>ng2</p>
          </div>

          <div className='ng3'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>ng3</p>
          </div>

          <div className='skbk1'>
            <p>skbk1</p>
          </div>
          
          <div className='blkbrd'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>blkbrd</p>
          </div>
          
          <div className='marks'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>marks</p>
          </div>

          <div className='sites'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>sites</p>
          </div>

          <div className='toons'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>toons</p>
          </div>

          <div className='skbk2'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>skbk2</p>
          </div>

          <div className='screens'>
            {/* <Image src={marks} alt='marks' /> */}
            <p>screens</p>
          </div>

          {/* <div className='hero'> */}
          {/*   <Image src={wide1} alt='wide1' /> */}
          {/*   <details> */}
          {/*     <summary> */}
          {/*       <h5>wide 1</h5> */}
          {/*     </summary> */}
          {/*     <p>Here's a pic of Batman</p> */}
          {/*   </details> */}
          {/* </div> */}
          {/**/}
          {/* <div> */}
          {/*   <Image src={marks} alt='marks' /> */}
          {/*   <details> */}
          {/*     <summary> */}
          {/*       <h5>Marks</h5> */}
          {/*     </summary> */}
          {/*     <p>Here's some marks</p> */}
          {/*   </details> */}
          {/* </div> */}
          {/**/}
          {/* <div> */}
          {/*   <Image src={cartoons} alt='cartoons' /> */}
          {/*   <details> */}
          {/*     <summary> */}
          {/*       <h5>Cartoons</h5> */}
          {/*     </summary> */}
          {/*     <p>Here's a pic of some cartoons</p> */}
          {/*   </details> */}
          {/* </div> */}
          {/**/}
          {/* <div> */}
          {/*   <Image src={screens} alt='screens' /> */}
          {/*   <details> */}
          {/*     <summary> */}
          {/*       <h5>Screens</h5> */}
          {/*     </summary> */}
          {/*     <p>Here's some screens</p> */}
          {/*   </details> */}
          {/* </div> */}
          {/*  */}
          {/* <div> */}
          {/*   <Image src={sites} alt='sites' /> */}
          {/*   <details> */}
          {/*     <summary> */}
          {/*       <h5>Sites</h5> */}
          {/*     </summary> */}
          {/*     <p>Here's some old sites</p> */}
          {/*   </details> */}
          {/* </div> */}

        </div>
      </div>
    </>
  )
}

