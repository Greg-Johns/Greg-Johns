"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './gallery.css';

const cur = '#222';
const notCur = '#999';

export default function Gallery(
  { type, dir, images }: { type?: string; dir: string; images: string[] }
) {
  const [galleryType, setGalleryType] = useState(type ?? 'gallery');
  const inlineColor = galleryType === 'gallery_row' ? cur : notCur;
  const gridColor = galleryType === 'gallery_row' ? notCur : cur;

  return (
    <>
      <div className='gallery_buttons'>
        <button className='inline' onClick={() => setGalleryType('gallery_row')}>
          <svg width="26" height="6" viewBox="0 0 30 8" fill="none">
            <rect width="6" height="6" fill={inlineColor} />
            <rect x="10" width="6" height="6" fill={inlineColor} />
            <rect x="20" width="6" height="6" fill={inlineColor} />
          </svg>
        </button>
        <button onClick={() => setGalleryType('gallery')}>
          <svg width="14" height="14" viewBox="0 0 19 18" fill="none">
            <rect width="6" height="6" fill={gridColor} />
            <rect x="10" width="6" height="6" fill={gridColor} />
            <rect y="10" width="6" height="6" fill={gridColor} />
            <rect x="10" y="10" width="6" height="6" fill={gridColor} />
          </svg>
        </button>
      </div>
      <div className={galleryType}>
        {images?.map((name) =>
          galleryType === 'gallery' ? (
            <div key={name} className='gallery_item'>
              <Lightbox src={name} alt={name} img_array={images} dir={dir}>
                <Image src={`/${dir}/${name}.jpg`} alt={name} width={250} height={250} />
              </Lightbox>
            </div>
          ) : (
            <div key={name}>
              <Image src={`/${dir}/${name}.jpg`} alt={name} width={500} height={500} />
            </div>
          ),
        )}
      </div>
    </>
  );
}
