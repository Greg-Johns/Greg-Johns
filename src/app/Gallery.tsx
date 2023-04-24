import Image from 'next/image';
import React from 'react';
import Lightbox from './Lightbox';
import './gallery.css'

export default function Gallery(
  { type, dir, images }: { type: string, dir: string, images: [string] }
) {

  const galleryType = (type === undefined ? 'gallery' : type);

  return (
    <div className={galleryType}>
      {images?.map((image) => (
        <Image
          key={image}
          src={`/${dir}/${image}.jpg`}
          alt={image}
          width='500'
          height='500'
      />))}
    </div>
  )
}

