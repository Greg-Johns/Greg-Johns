import Link from 'next/link';

const tsquare = <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <path d="M50.5 51L71 100H30L50.5 51Z" fill="#999"/>
    <path d="M50.5 49L30 -6.63706e-07L71 2.92063e-06L50.5 49Z" fill="#999"/>
    <path d="M21.5 50L0.5 70L0.500002 30L21.5 50Z" fill="#999"/>
    <path d="M79.5 50L99.5 30L99.5 70L79.5 50Z" fill="#999"/>
  </svg>


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

      <div style={
        {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }>
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
        { tsquare }
      </div>
    </>
  )
}

