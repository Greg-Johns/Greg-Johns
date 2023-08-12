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
      <nav />

      <P5Wrapper id="p5-wrapper" />
    </>
  );
}

export default P5Page;
