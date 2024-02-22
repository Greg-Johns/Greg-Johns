import Image from 'next/image';
import React, { useState } from 'react';
import './lightbox.css'

interface Props {
  children: any,
  src: string,
  alt: string,
  img_array: string[],
  dir: string
}
const LightBox: React.FC<Props> = ({ children, src, alt, img_array, dir }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [srcImg, setSrcImg] = useState(src);
  const [prevAvail, setPrevAvail] = useState(true);
  const [nextAvail, setNextAvail] = useState(true);
  let curImg = srcImg.substring(srcImg.lastIndexOf('/')).split('.')[0];

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const prev = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    const prevImg = img_array.findIndex((i) => i == curImg) - 1;
    if (prevImg >= 0) {
      setSrcImg(img_array[prevImg]);
      setNextAvail(true);
    } else {
      setPrevAvail(false);
    }
  }

  const next = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    let nextImg = img_array.findIndex((i) => i == curImg) + 1;
    if (nextImg < img_array.length) {
      setSrcImg(img_array[nextImg]);
      setPrevAvail(true);
    } else {
      setNextAvail(false);
    }
  }

  return (
    <div onClick={toggleIsOpen}>
      {children}
      {isOpen ?
        <div className='lightbox' onClick={toggleIsOpen}>
          <div style={{ display: 'block' }}>
            <Image width='500' height='500' src={`/${dir}/${srcImg}.jpg`} alt={alt} />
            <figcaption>{curImg}</figcaption>
            <div className='lightbox_nav'>
              {
                prevAvail && <button onClick={(e) => prev(e)}>{'< Prev'}</button>
              }{
                nextAvail && <button onClick={(e) => next(e)}>{'Next >'}</button>
              }
            </div>
          </div>
        </div>
        : null}
    </div>
  );
};

export default LightBox;
