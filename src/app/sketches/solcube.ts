import type P5 from 'p5';
import { type Sketch, CanvasContainerClassName } from "@p5-wrapper/react";


const COLORS: [number, number, number][] = [
  [274, 22, 52],
  [255, 217, 86],
  [196, 254, 153],
  [73, 254, 254],
  [42, 88, 252],
  [233, 80, 252],
];

const MIN_CUBE_RATIO = 0.24;
const MAX_CUBE_RATIO = 0.42;

const STRIPE_WEIGHT = 1.2;
const BASE_STRIPE_GAP_IN_STROKES = 3;
const STRIPE_GAP_ANIM_AMPLITUDE = 10;
const STRIPE_GAP_ANIM_SPEED = 0.1;
const MIN_STRIPE_GAP_IN_STROKES = 2;
const MAX_STRIPE_GAP_IN_STROKES = 10;
const STRIPE_DENSITY_SCALE = 1.12;

const DRAG_ROTATION_SPEED = 0.01;
const IDLE_ROT_VX = 0.0003;
const IDLE_ROT_VY = 0.00045;
const IDLE_ROT_VZ = 0.0002;
const ROTATION_RETURN_EASE = 0.03;
const DRAG_THROW_BLEND = 0.35;
const MAX_THROW_SPEED = 0.09;
const IDLE_ACTIVITY_DECAY = 0.985;
const MIN_ACTIVITY = 0.01;
const MOTION_EPSILON = 0.00025;
const RELEASE_ANIM_EASE = 0.1;

const TARGET_FPS = 30;

const BASE_STRETCH = 1;
const STRETCH_AMPLITUDE_X = 0.6;
const STRETCH_AMPLITUDE_Y = 0.4;
const STRETCH_AMPLITUDE_Z = 0.2;
const STRETCH_SPEED_X = 0.14;
const STRETCH_SPEED_Y = 0.16;
const STRETCH_SPEED_Z = 0.12;

// The canvas is sized from its container (the 640px main column, blown up
// to 110% by .sketchFrame) instead of the window, so it lives inside the
// page layout rather than covering it.
const FALLBACK_FRAME_WIDTH = 704;
const CANVAS_ASPECT = 1;

const DEFAULT_BACKGROUND = '#514C48';

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

const getCanvasContainer = (): HTMLElement | null =>
  document.querySelector<HTMLElement>(`.${CanvasContainerClassName}`);

const getFrameWidth = (): number => {
  const width = getCanvasContainer()?.clientWidth ?? 0;
  return width > 0 ? width : FALLBACK_FRAME_WIDTH;
};

const readThemeBackground = (): string => {
  const value = getComputedStyle(document.body)
    .getPropertyValue('--color-bg-secondary')
    .trim();

  return value || DEFAULT_BACKGROUND;
};



const sketch: Sketch = (p) => {

  const drawStripedCube = (
    p: P5,
    size: number,
    faceColors: [number, number, number][],
    stripeGapInStrokes: number,
  ) => {
    const h = size / 2;
    const stripeStep = STRIPE_WEIGHT * (stripeGapInStrokes + 1) * STRIPE_DENSITY_SCALE;

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
  let backgroundColor = readThemeBackground();
  let animationActivity = 1;
  let frozenStripeGapInStrokes = BASE_STRIPE_GAP_IN_STROKES;
  let frozenStretchX = BASE_STRETCH;
  let frozenStretchY = BASE_STRETCH;
  let frozenStretchZ = BASE_STRETCH;
  let displayedStripeGapInStrokes = BASE_STRIPE_GAP_IN_STROKES;
  let displayedStretchX = BASE_STRETCH;
  let displayedStretchY = BASE_STRETCH;
  let displayedStretchZ = BASE_STRETCH;
  let releaseBlend = 1;

  const ensureLooping = () => {
    if (!p.isLooping()) p.loop();
  };

  p.setup = () => {
    const container = getCanvasContainer();

    // ensure only one canvas exists (prevents duplicates on remount/navigation)
    const existing = container?.querySelector('canvas');
    if (existing) existing.remove();

    const width = getFrameWidth();

    p.createCanvas(width, Math.round(width * CANVAS_ASPECT), p.WEBGL);
    p.pixelDensity(1);
    p.frameRate(TARGET_FPS);

    const baseSize = Math.min(p.width, p.height);
    cubeSize = p.random(baseSize * MIN_CUBE_RATIO, baseSize * MAX_CUBE_RATIO);

    rotX = p.random(p.TWO_PI);
    rotY = p.random(p.TWO_PI);
    rotZ = p.random(p.TWO_PI);

    faceColors = pickDistinctColors(COLORS, 6);

    // follow the site theme (dark/light toggle lives in the footer)
    const themeObserver = new MutationObserver(() => {
      backgroundColor = readThemeBackground();

      if (p.isLooping()) {
        return;
      }

      p.redraw();
    });

    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const p5Remove = p.remove.bind(p);

    p.remove = () => {
      themeObserver.disconnect();
      p5Remove();
    };
  };

  p.draw = () => {
    // p.background(220, 220, 100);
    p.background(backgroundColor);

    const t = p.millis() * 0.001;
    const activeAmplitude = animationActivity;

    const animatedStripeGapInStrokes = clamp(
      BASE_STRIPE_GAP_IN_STROKES
      + Math.sin(t * STRIPE_GAP_ANIM_SPEED) * STRIPE_GAP_ANIM_AMPLITUDE * activeAmplitude,
      MIN_STRIPE_GAP_IN_STROKES,
      MAX_STRIPE_GAP_IN_STROKES,
    );

    const animatedStretchX = BASE_STRETCH + Math.sin(t * STRETCH_SPEED_X) * STRETCH_AMPLITUDE_X * activeAmplitude;
    const animatedStretchY = BASE_STRETCH + Math.sin(t * STRETCH_SPEED_Y + 1.2) * STRETCH_AMPLITUDE_Y * activeAmplitude;
    const animatedStretchZ = BASE_STRETCH + Math.sin(t * STRETCH_SPEED_Z + 2.4) * STRETCH_AMPLITUDE_Z * activeAmplitude;

    if (!isDragging && releaseBlend < 1) {
      releaseBlend += (1 - releaseBlend) * RELEASE_ANIM_EASE;
      if (releaseBlend > 0.999) releaseBlend = 1;
    }

    const stripeGapInStrokes = isDragging
      ? frozenStripeGapInStrokes
      : p.lerp(frozenStripeGapInStrokes, animatedStripeGapInStrokes, releaseBlend);
    const stretchX = isDragging
      ? frozenStretchX
      : p.lerp(frozenStretchX, animatedStretchX, releaseBlend);
    const stretchY = isDragging
      ? frozenStretchY
      : p.lerp(frozenStretchY, animatedStretchY, releaseBlend);
    const stretchZ = isDragging
      ? frozenStretchZ
      : p.lerp(frozenStretchZ, animatedStretchZ, releaseBlend);

    displayedStripeGapInStrokes = stripeGapInStrokes;
    displayedStretchX = stretchX;
    displayedStretchY = stretchY;
    displayedStretchZ = stretchZ;

    if (!isDragging) {
      animationActivity *= IDLE_ACTIVITY_DECAY;
      if (animationActivity < MIN_ACTIVITY) animationActivity = 0;

      rotVX += (IDLE_ROT_VX * animationActivity - rotVX) * ROTATION_RETURN_EASE;
      rotVY += (IDLE_ROT_VY * animationActivity - rotVY) * ROTATION_RETURN_EASE;
      rotVZ += (IDLE_ROT_VZ * animationActivity - rotVZ) * ROTATION_RETURN_EASE;

      rotX += rotVX;
      rotY += rotVY;
      rotZ += rotVZ;
    }

    const rotationalMotion = Math.abs(rotVX) + Math.abs(rotVY) + Math.abs(rotVZ);
    if (!isDragging && animationActivity === 0 && rotationalMotion < MOTION_EPSILON) {
      rotVX = 0;
      rotVY = 0;
      rotVZ = 0;
      p.noLoop();
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
    frozenStripeGapInStrokes = displayedStripeGapInStrokes;
    frozenStretchX = displayedStretchX;
    frozenStretchY = displayedStretchY;
    frozenStretchZ = displayedStretchZ;
    releaseBlend = 0;

    isDragging = true;
    animationActivity = 1;
    ensureLooping();
    return false;
  };

  p.mouseDragged = () => {
    animationActivity = 1;
    ensureLooping();

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
    animationActivity = 1;
    releaseBlend = 0;
    return false;
  };


};


// new p5(sketch);
export default sketch;
