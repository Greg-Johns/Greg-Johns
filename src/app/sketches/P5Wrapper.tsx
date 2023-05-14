import React, { useEffect } from 'react';
import p5 from 'p5';
import sketch from './d1.js';

interface foo {
  id: string
};

const P5Wrapper = (props: foo) => {
  useEffect(() => {
    let myp5 = new p5(sketch);
  }, [])

  return (
    <div id={props.id} style={{lineHeight: 0}} />
  )
}

export default P5Wrapper;
