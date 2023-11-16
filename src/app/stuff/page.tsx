import Image from 'next/image'
import Link from 'next/link';
import '../comics.css'

import hero from '../../../public/stuff/heroes_villians/hv_9.jpg'
import sketchbook from '../../../public/stuff/sketchbooks/sb_15.jpg'
import sites from '../../../public/stuff/tn_sites.gif'
import marks from '../../../public/stuff/tn_mark.jpg'
import cartoons from '../../../public/stuff/cartoons/spock.jpg'
import screens from '../../../public/stuff/tn_screens.jpg'
import ng1 from '../../../public/genart/ng/ng12.jpg'
import ng2 from '../../../public/genart/waves/waves_12.jpg'

export default function Stuff() {

  var sectionStyle = {
    border: "4px solid red",
    //backgroundImage: `url(${hero})`
    backgroundImage: `url(${hero})`
  };


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

            <Link href='/heroes'>
              <div
                className='hero' 
/* https://davidwalsh.name/multiple-background-css-animations */
                style={{ backgroundImage:`url(${JSON.stringify(hero.src)})` }}
              >
                  <details open>
                    <summary>
                      <h5>Hero's & Villians</h5>
                    </summary>
                    <p>Here's some H&V's</p>
                  </details>
              </div>
            </Link>

          <Link href='/nodegarden'>
            <div 
              className='ng1'
              style={{ backgroundImage:`url(${JSON.stringify(ng1.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Node Garden 1</h5>
                </summary>
                <p>Here's some stuff about heroes and villians.</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div
              className='ng2'
              style={{ backgroundImage:`url(${JSON.stringify(ng2.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Node Garden 2</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div
              className='ng3'
              style={{ backgroundImage:`url(${JSON.stringify(hero.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Node Garden 3</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div 
              className='skbk1'
              style={{ backgroundImage:`url(${JSON.stringify(sketchbook.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Sketchbook 1</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>
          
          <Link href='/heroes'>
            <div 
              className='blkbrd'
              style={{ backgroundImage:`url(${JSON.stringify(hero.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Blackboard</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>
          
          <Link href='/heroes'>
            <div 
              className='marks'
              style={{ backgroundImage:`url(${JSON.stringify(marks.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Marks</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div 
              className='sites'
              style={{ backgroundImage:`url(${JSON.stringify(sites.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Old sites</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div 
              className='toons'
              style={{ backgroundImage:`url(${JSON.stringify(cartoons.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Cartoons</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div 
              className='skbk2'
              style={{ backgroundImage:`url(${JSON.stringify(hero.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Sketchbook 2</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

          <Link href='/heroes'>
            <div 
              className='screens'
              style={{ backgroundImage:`url(${JSON.stringify(screens.src)})` }}
            >
              <details open>
                <summary>
                  <h5>Screens</h5>
                </summary>
                <p>Here's some ...</p>
              </details>
            </div>
          </Link>

        </div>
      </div>
    </>
  )
}

