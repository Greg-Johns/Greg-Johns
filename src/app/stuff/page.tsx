import Image from 'next/image'
import Link from 'next/link';
import '../comics.css'

import hero from '../../../public/stuff/heroes_villians/hv_9.jpg'
import ng1 from '../../../public/stuff/genart/ng/ng12.jpg'
import ng2 from '../../../public/stuff/genart/spirals/spiral_17.jpg'
import ng3 from '../../../public/stuff/genart/columns/col_22.jpg'
import sketchbook1 from '../../../public/stuff/sketchbook1/sb_15.jpg'
import sketchbook2 from '../../../public/stuff/sketchbook1/sb_19.jpg'
import sketchbook3 from '../../../public/stuff/sketchbook1/sb_1.jpg'
import sites from '../../../public/stuff/tn_sites.gif'
import marks from '../../../public/stuff/tn_mark.jpg'
import blkbrd from '../../../public/stuff/blackboard/flyball.jpeg'
import cartoons from '../../../public/stuff/cartoons/spock.jpg'
import screens from '../../../public/stuff/tn_screens.jpg'
import boids from '../../../public/stuff/tn_boids.jpg'

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

      <p style={{ marginTop: '30px' }}>
        A selection of designs, drawings, sketches, paintings, concept art, cartoons and whatever else I’ve put some creative energy into that makes me feel good.
      </p>

      <div className='comic_pg'>

        {/* <Link href='/heroes'> */}
        {/*   <div */}
        {/*     className='hero' */}
        {/*     style={{ */}
        {/*       backgroundImage: `url(${JSON.stringify(hero.src)})`, */}
        {/*     }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Hero's & Villians</h5> */}
        {/*       </summary> */}
        {/*       <p>Some classic heroes and villians character sketches.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}

        <Link href='/nodegardens'>
          <div
            className='ng1'
            style={{ backgroundImage: `url(${JSON.stringify(ng1.src)})` }}
          >
            <details open>
              <summary>
                <h5>Node Garden 1</h5>
              </summary>
              <p>First in a series of generative art works based off an old code base now long gone.</p>
            </details>
          </div>
        </Link>

        <Link href='/ng2'>
          <div
            className='ng2'
            style={{ backgroundImage: `url(${JSON.stringify(ng2.src)})`, backgroundColor: 'black' }}
          >
            <details open>
              <summary>
                <h5>Node Garden 2</h5>
              </summary>
              <p>More sketches from  the Node Gardening gen art series.</p>
            </details>
          </div>
        </Link>

       <Link href='/ng3'>
          <div
            className='ng3'
            style={{ backgroundImage: `url(${JSON.stringify(ng3.src)})`, backgroundColor: 'black' }}
          >
            <details open>
              <summary>
                <h5>Node Garden 3</h5>
              </summary>
              <p>The last set of sketches from the Node Gardening gen art series.</p>
            </details>
          </div>
        </Link>

        {/* <Link href='/skbk1'> */}
        {/*   <div */}
        {/*     className='skbk1' */}
        {/*     style={{ backgroundImage: `url(${JSON.stringify(sketchbook1.src)})` }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Sketchbook 1</h5> */}
        {/*       </summary> */}
        {/*       <p>Sketchbook figure drawings.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}

        {/* <Link href='/sk2'> */}
        {/*   <div */}
        {/*     className='skbk2' */}
        {/*     style={{ backgroundImage: `url(${JSON.stringify(sketchbook2.src)})` }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Sketchbook 2</h5> */}
        {/*       </summary> */}
        {/*       <p>Sketchy stuff.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}

        {/* <Link href='/skbk3'> */}
        {/*   <div */}
        {/*     className='skbk3' */}
        {/*     style={{ backgroundImage: `url(${JSON.stringify(sketchbook3.src)})` }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Sketchbook 3</h5> */}
        {/*       </summary> */}
        {/*       <p>More sketchy stuff.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}

        {/* <Link href='/blkboard'> */}
        {/*   <div */}
        {/*     className='blkbrd' */}
        {/*     style={{ backgroundImage: `url(${JSON.stringify(blkbrd.src)})` }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Blackboard</h5> */}
        {/*       </summary> */}
        {/*       <p>Various chalk drawing.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}
        {/**/}
        {/* <Link href='/marks'> */}
        {/*   <div */}
        {/*     className='marks' */}
        {/*     style={{ backgroundImage: `url(${JSON.stringify(marks.src)})` }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Marks</h5> */}
        {/*       </summary> */}
        {/*       <p>Marketing marks.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}

        <Link href='/sites'>
          <div
            className='sites'
            style={{ backgroundImage: `url(${JSON.stringify(sites.src)})` }}
          >
            <details open>
              <summary>
                <h5>Old sites</h5>
              </summary>
              <p>Some (very) old sites I&apos;ve participated in making.</p>
            </details>
          </div>
        </Link>

        {/* <Link href='/cartoons'> */}
        {/*   <div */}
        {/*     className='toons' */}
        {/*     style={{ backgroundImage: `url(${JSON.stringify(cartoons.src)})` }} */}
        {/*   > */}
        {/*     <details open> */}
        {/*       <summary> */}
        {/*         <h5>Cartoons</h5> */}
        {/*       </summary> */}
        {/*       <p>Tooooons.</p> */}
        {/*     </details> */}
        {/*   </div> */}
        {/* </Link> */}
        {/**/}

        <Link href='/screens'>
          <div
            className='screens'
            style={{ backgroundImage: `url(${JSON.stringify(screens.src)})` }}
          >
            <details open>
              <summary>
                <h5>Screens</h5>
              </summary>
              <p>Various screen and interaction design work.</p>
            </details>
          </div>
        </Link>

        <Link href='/sketches'>
          <div
            className='sketch'
            style={{ backgroundImage: `url(${JSON.stringify(boids.src)})` }}
          >
            <details open>
              <summary>
                <h5>Boid Droids</h5>
              </summary>
              <p>
                Fun with P5
              </p>
            </details>
          </div>
        </Link>

        <Link href='/sandbox'>
          <div
            className='sketch'
            style={{ backgroundImage: `url(${JSON.stringify(boids.src)})` }}
          >
            <details open>
              <summary>
                <h5>Tiangles</h5>
              </summary>
              <p>
                Experiment
              </p>
            </details>
          </div>
        </Link>

      </div>
    </>
  )
}

