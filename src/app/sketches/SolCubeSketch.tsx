"use client";
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('./SolCubeSketchInner'), { ssr: false });

export default function SolCubeSketch() {
  return <Sketch />;
}
