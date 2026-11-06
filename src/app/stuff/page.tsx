import Image from 'next/image'
import Link from 'next/link';
import '../comics.css'

import ng1 from '../../../public/stuff/genart/ng/ng12.jpg'
import ng2 from '../../../public/stuff/genart/spirals/spiral_17.jpg'
import ng3 from '../../../public/stuff/genart/columns/col_22.jpg'
import sites from '../../../public/stuff/tn_sites.gif'
import screens from '../../../public/stuff/tn_screens.jpg'
import solcube from '../../../public/stuff/solcube.png'

const entries = [
  {
    href: '/nodegardens',
    title: 'Node Garden #1',
    caption: 'Generative drawings grown from nodes and the lines between them.',
    image: ng1,
  },
  {
    href: '/ng2',
    title: 'Node Garden #2',
    caption: 'The same system pushed into spirals.',
    image: ng2,
  },
  {
    href: '/ng3',
    title: 'Node Garden #3',
    caption: 'The same system arranged in columns.',
    image: ng3,
  },
  {
    href: '/sites',
    title: 'Old sites',
    caption: 'Websites I designed and built over the years.',
    image: sites,
  },
  {
    href: '/screens',
    title: 'Screens',
    caption: 'Interface and UX designs from past projects.',
    image: screens,
  },
  {
    href: '/sketches',
    title: 'Sketches (Sol Cube)',
    caption: 'Interactive p5.js sketches, starting with the Sol Cube.',
    image: solcube,
  },
]

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

      <p className='stuffIntro'>
        Designs, drawings, sketches, paintings, concept art, cartoons and whatever else I’ve put some creative energy into that makes me feel good.
      </p>

      <ul className='stuffIndex'>
        {entries.map(({ href, title, caption, image }) => (
          <li key={href}>
            <Link href={href}>
              <Image src={image} alt='' width={112} height={84} />
              <span>
                <h3>{title}</h3>
                <p>{caption}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
