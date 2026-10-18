import type P5 from 'p5';
import { type Sketch } from "@p5-wrapper/react";


const COLORS: [number, number, number][] = [
  [255, 0, 0],
  [255, 165, 0],
  [255, 255, 0],
  [0, 200, 0],
  [0, 100, 255],
  [90, 0, 220],
  [255, 0, 150],
  [0, 220, 220],
  [255, 255, 255],
];

const MIN_CUBE_RATIO = 0.14;
const MAX_CUBE_RATIO = 0.26;

const STRIPE_WEIGHT = 1.2;
const BASE_STRIPE_GAP_IN_STROKES = 3;
const STRIPE_GAP_ANIM_AMPLITUDE = 10;
const STRIPE_GAP_ANIM_SPEED = 0.1;
const MIN_STRIPE_GAP_IN_STROKES = 2;
const MAX_STRIPE_GAP_IN_STROKES = 10;

const DRAG_ROTATION_SPEED = 0.01;
const IDLE_ROT_VX = 0.0003;
const IDLE_ROT_VY = 0.00045;
const IDLE_ROT_VZ = 0.0002;
const ROTATION_RETURN_EASE = 0.03;
const DRAG_THROW_BLEND = 0.35;
const MAX_THROW_SPEED = 0.09;

const BASE_STRETCH = 1;
const STRETCH_AMPLITUDE_X = 0.6;
const STRETCH_AMPLITUDE_Y = 0.4;
const STRETCH_AMPLITUDE_Z = 0.2;
const STRETCH_SPEED_X = 0.14;
const STRETCH_SPEED_Y = 0.16;
const STRETCH_SPEED_Z = 0.12;

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const pickDistinctColors = (
  palette: [number, number, number][],
  count: number,
): [number, number, number][] => {
  const paletteCopy = [...palette];

  for (let i = paletteCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [paletteCopy[i], paletteCopy[j]] = [paletteCopy[j], paletteCopy[i]];
  }

  return paletteCopy.slice(0, count);
};



const sketch: Sketch = (p) => {

  const drawStripedCube = (
    p: P5,
    size: number,
    faceColors: [number, number, number][],
    stripeGapInStrokes: number,
  ) => {
    const h = size / 2;
    const stripeStep = STRIPE_WEIGHT * (stripeGapInStrokes + 1);

    p.noFill();
    p.strokeWeight(STRIPE_WEIGHT);

    // Front (stripes parallel to X, stepped on Y)
    p.stroke(...faceColors[0]);
    for (let y = -h; y <= h; y += stripeStep) {
      p.line(-h, y, h, h, y, h);
    }

    // Back (stripes parallel to X, stepped on Y)
    p.stroke(...faceColors[1]);
    for (let y = -h; y <= h; y += stripeStep) {
      p.line(h, y, -h, -h, y, -h);
    }

    // Left (stripes parallel to Z, stepped on Y)
    p.stroke(...faceColors[2]);
    for (let y = -h; y <= h; y += stripeStep) {
      p.line(-h, y, -h, -h, y, h);
    }

    // Right (stripes parallel to Z, stepped on Y)
    p.stroke(...faceColors[3]);
    for (let y = -h; y <= h; y += stripeStep) {
      p.line(h, y, h, h, y, -h);
    }

    // Top (stripes parallel to X, stepped on Z)
    p.stroke(...faceColors[4]);
    for (let z = -h; z <= h; z += stripeStep) {
      p.line(-h, -h, z, h, -h, z);
    }

    // Bottom (stripes parallel to X, stepped on Z)
    p.stroke(...faceColors[5]);
    for (let z = -h; z <= h; z += stripeStep) {
      p.line(-h, h, z, h, h, z);
    }
  };



  let cubeSize = 120;
  let rotX = 0;
  let rotY = 0;
  let rotZ = 0;
  let rotVX = IDLE_ROT_VX;
  let rotVY = IDLE_ROT_VY;
  let rotVZ = IDLE_ROT_VZ;
  let isDragging = false;
  let faceColors: [number, number, number][] = [];

  p.setup = () => {
    // ensure only one canvas exists (prevents duplicates on remount/navigation)
    const existing = document.querySelector('canvas');
    if (existing) existing.remove();

    p.createCanvas(window.innerWidth - 2, window.innerHeight - 8, p.WEBGL);
    p.pixelDensity(1);

    const baseSize = Math.min(p.width, p.height);
    cubeSize = p.random(baseSize * MIN_CUBE_RATIO, baseSize * MAX_CUBE_RATIO);

    rotX = p.random(p.TWO_PI);
    rotY = p.random(p.TWO_PI);
    rotZ = p.random(p.TWO_PI);

    faceColors = pickDistinctColors(COLORS, 6);
  };

  p.draw = () => {
    // p.background('#E3E3E3');
    p.background('#514C48');

    const t = p.millis() * 0.001;

    const stripeGapInStrokes = clamp(
      BASE_STRIPE_GAP_IN_STROKES
      + Math.sin(t * STRIPE_GAP_ANIM_SPEED) * STRIPE_GAP_ANIM_AMPLITUDE,
      MIN_STRIPE_GAP_IN_STROKES,
      MAX_STRIPE_GAP_IN_STROKES,
    );

    const stretchX = BASE_STRETCH + Math.sin(t * STRETCH_SPEED_X) * STRETCH_AMPLITUDE_X;
    const stretchY = BASE_STRETCH + Math.sin(t * STRETCH_SPEED_Y + 1.2) * STRETCH_AMPLITUDE_Y;
    const stretchZ = BASE_STRETCH + Math.sin(t * STRETCH_SPEED_Z + 2.4) * STRETCH_AMPLITUDE_Z;

    if (!isDragging) {
      rotVX += (IDLE_ROT_VX - rotVX) * ROTATION_RETURN_EASE;
      rotVY += (IDLE_ROT_VY - rotVY) * ROTATION_RETURN_EASE;
      rotVZ += (IDLE_ROT_VZ - rotVZ) * ROTATION_RETURN_EASE;

      rotX += rotVX;
      rotY += rotVY;
      rotZ += rotVZ;
    }

    p.push();
    p.rotateX(rotX);
    p.rotateY(rotY);
    p.rotateZ(rotZ);
    p.scale(stretchX, stretchY, stretchZ);
    drawStripedCube(p, cubeSize, faceColors, stripeGapInStrokes);
    p.pop();
  };

  p.mousePressed = () => {
    isDragging = true;
    return false;
  };

  p.mouseDragged = () => {
    const dx = p.movedX * DRAG_ROTATION_SPEED;
    const dy = p.movedY * DRAG_ROTATION_SPEED;

    rotY += dx;
    rotX += dy;

    const nextVX = clamp(dy, -MAX_THROW_SPEED, MAX_THROW_SPEED);
    const nextVY = clamp(dx, -MAX_THROW_SPEED, MAX_THROW_SPEED);

    rotVX += (nextVX - rotVX) * DRAG_THROW_BLEND;
    rotVY += (nextVY - rotVY) * DRAG_THROW_BLEND;

    return false;
  };

  p.mouseReleased = () => {
    isDragging = false;
    return false;
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth - 2, window.innerHeight - 8);
  };


};


// new p5(sketch);
export default sketch;
