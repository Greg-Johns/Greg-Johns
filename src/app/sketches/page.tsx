'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./solcube";
import '../comics.css'
import Link from 'next/link';


// export default function Page() {
// }


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

      <NextReactP5Wrapper sketch={sketch} />
      <p style={{ marginTop: '30px' }}>
        A selection of designs, drawings, sketches, paintings, concept art, cartoons and whatever else I’ve put some creative energy into that makes me feel good.
      </p>
    </>
  )
}

