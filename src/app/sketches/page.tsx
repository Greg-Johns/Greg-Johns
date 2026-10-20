'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./solcube";
import Link from 'next/link';
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
        Idea: A study of a rotating colored cube.
        Click and drag to rotate the cube.
      </p>
      <p style={{ marginTop: '30px' }}>
        A p5 sketch Sol Lewitt inspired animated colored cube sketch. Sitting at home more with time on my hands and wanted to play around more with p5 also I picked up a lot of art books from my library. One of them was Sol Lewitt ...
      </p>
    </>
  )
}
