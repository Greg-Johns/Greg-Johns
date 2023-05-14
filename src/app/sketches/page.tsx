"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const P5Wrapper = dynamic(import('./P5Wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const P5Page = () => {
  return (
    <>
      <nav>
        <Link href='/'>
          Wrote
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/stuff'>
          Stuff
        </Link>
      </nav>

      <P5Wrapper id="p5-wrapper" />
    </>
  );
}

export default P5Page;
