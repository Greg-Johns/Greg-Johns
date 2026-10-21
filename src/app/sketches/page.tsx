'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./solcube";
import Link from 'next/link';
import Image from 'next/image';
import sol2 from '../../../public/sol2.jpeg'
import sol4 from '../../../public/sol4.jpg'
import sol5 from '../../../public/sol5.jpeg'
import './sketches.css';


export default function Sketches() {

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

      <h6> </h6>
      <div className='sketchFrame'>
        <NextReactP5Wrapper sketch={sketch} />
      </div>

      <h4>Sol Cube</h4>
      <aside>
        A color study of a rotating cube. Each side is made up of a different color of parallel lines that when crossed create interesting Venetian blind effect. Click and drag to rotate the cube.
      </aside>
      <div>
        <span>
          <p style={{ marginTop: '30px' }}>
            Recently I've had more time on my hands and wanted to play around more with p5. I also had time to thumb through a lot of art books I haven't looked at in a while. One of them was <i>Sol Lewitt A Retrospective</i>.  I was drawn to his work of simple rectangal shapes of varying colors and many works in colored line and shapes. I wanted to do something similar but with animation and interaction because this medium is digital.
          </p>
        </span>
        <span>
          <Image className='smImg' src={sol2} alt='Sol Lewitt img1' />
          <Image className='smImg' src={sol4} alt='Sol Lewitt img2' />
          <Image className='smImg' src={sol5} alt='Sol Lewitt img3' />
        </span>
        <p>Thinking about how viewer interaction would work while making it easy on the processors out there, the only calculations and paint changes are when the cube is moving. Also the gap space between the parallel lines change when moving. This is a slow change but let's you take time with the sketch. Let it breath.
        </p>
        <p>ahhh, that's it.</p>
      </div >
    </>
  )
}
