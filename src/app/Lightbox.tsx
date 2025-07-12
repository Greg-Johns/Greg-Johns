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
  const [prevAvail, setPrevAvail] = useState(true);
  const [nextAvail, setNextAvail] = useState(true);
  
  const curImg = srcImg.substring(srcImg.lastIndexOf('/')).split('.')[0];
  const currentIndex = img_array.findIndex((i) => i === curImg);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const prev = useCallback((e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setSrcImg(img_array[prevIndex]);
      setNextAvail(true);
      setPrevAvail(prevIndex > 0);
    } else {
      setPrevAvail(false);
    }
  }, [currentIndex, img_array]);

  const next = useCallback((e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    const nextIndex = currentIndex + 1;
    if (nextIndex < img_array.length) {
      setSrcImg(img_array[nextIndex]);
      setPrevAvail(true);
      setNextAvail(nextIndex < img_array.length - 1);
    } else {
      setNextAvail(false);
    }
  }, [currentIndex, img_array]);

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
