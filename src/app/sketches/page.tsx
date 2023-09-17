"use client"
import React from 'react';
/* import dynamic from 'next/dynamic'; */
import Link from 'next/link';

/* const P5Wrapper = dynamic(import('./P5Wrapper'), { */
/*   loading: () => <p>Loading...</p>, */
/*   ssr: false, */
/* }); */

const canvas = document.querySelector('canvas');
const context = canvas?.getContext('2d');

if (canvas !== null && context !== null && context !== undefined) {

  var size = 320;
  var dpr = window.devicePixelRatio;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  context.scale(dpr, dpr);
  context.lineWidth = 1;

  var randomDisplacement = 15;
  var rotateMultiplier = 20;
  var offset = 10;
  var squareSize = 30;

  const draw = (width: number, height: number) => {
    context.beginPath();
    context.rect(-width/2, -height/2, width, height);
    context.stroke();
  }

  for(var i = squareSize; i <= size - squareSize; i += squareSize) {
    for(var j = squareSize; j <= size - squareSize; j+= squareSize) {
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var rotateAmt = j / size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;

      plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var translateAmt = j / size * plusOrMinus * Math.random() * randomDisplacement;
        
      context.save();
      context.translate(i + translateAmt + offset, j + offset);
      context.rotate(rotateAmt);
      draw(squareSize, squareSize);
      context.restore();
    }
  }
}

const Page = () => {
  return (
    <>
      <nav />

      <canvas />
    </>
  );
}

export default Page;
