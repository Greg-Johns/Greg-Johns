'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./solcube";
import Link from 'next/link';
import Image from 'next/image';
import compgraphics118 from '../../../public/compgraphics118.jpg'
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
      <p>
        A color study of a rotating cube. Each side is made up of a different color of parallel lines that when crossed create interesting Venetian blind effect. Click and drag to rotate the cube.
      </p>
      <div>
        <p style={{ marginTop: '30px' }}>
          Recently I've had more home more time on my hands and wanted to play around more with p5 and I also had time to thumb through a lot of art books I haven't looked at in a while. One of them was <i>Sol Lewitt A Retrospective</i>.  I'm particularly drawn to the simple square shapes of varying colors. I like to think about how viewer interaction would work with work and that's where the source for this interactive color study started.
          <Image className='smImg' src={sol2} alt='Sol Lewitt img1' />
          <Image className='smImg' src={sol4} alt='Sol Lewitt img2' />
          <Image className='smImg' src={sol5} alt='Sol Lewitt img3' />
        </p>
        <hr></hr>
        <p>
          Another book that I was browsing was <i>Computer Graphics 118 computer generated designs</i>. An old but wonderful look at computer graphics of the day. You can see from the cover where I picked up the idea for the parallel lines.
          <Image className='smImg' src={compgraphics118} alt='Comp Graphics' />
        </p>
      </div>
    </>
  )
}
