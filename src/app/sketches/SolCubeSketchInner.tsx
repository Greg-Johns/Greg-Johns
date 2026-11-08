"use client";
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import sketch from './solcube';

export default function SolCubeSketchInner() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
