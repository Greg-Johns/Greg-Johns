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

      <h4>Sketches</h4>

      <div className='sketchFrame'>
        <NextReactP5Wrapper sketch={sketch} />
      </div>

      <p style={{ marginTop: '30px' }}>
        A selection of designs, drawings, sketches, paintings, concept art, cartoons and whatever else I’ve put some creative energy into that makes me feel good.
      </p>
    </>
  )
}
