'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./boids";


export default function Page() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
