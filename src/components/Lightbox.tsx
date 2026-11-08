"use client";
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import './lightbox.css';

interface Props {
  children: React.ReactNode;
  src: string;
  alt: string;
  img_array: string[];
  dir: string;
}
const LightBox: React.FC<Props> = ({ children, src, alt, img_array, dir }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [srcImg, setSrcImg] = useState(src);

  const curImg = srcImg.substring(srcImg.lastIndexOf('/')).split('.')[0];
  const currentIndex = img_array.findIndex((i) => i === srcImg);
  const prevAvail = currentIndex > 0;
  const nextAvail = currentIndex < img_array.length - 1;

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  }, []);

  const prev = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    if (prevAvail) setSrcImg(img_array[currentIndex - 1]);
  };

  const next = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    if (nextAvail) setSrcImg(img_array[currentIndex + 1]);
  };

  return (
    <div onClick={open}>
      {children}
      {isOpen ?
        <div className='lightbox' onClick={close}>
          <div style={{ display: 'block' }}>
            <Image width={500} height={500} src={`/${dir}/${srcImg}.jpg`} alt={alt} />
            <figcaption>{curImg}</figcaption>
            <div className='lightbox_nav'>
              {prevAvail && <button onClick={prev}>{'< Prev'}</button>}
              {nextAvail && <button onClick={next}>{'Next >'}</button>}
            </div>
          </div>
        </div>
        : null}
    </div>
  );
};

export default LightBox;
