import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './gallery.css'

export default function Gallery(
  { type, dir, images }: { type: string, dir: string, images: [string] }
) {

  const galleryType = (type === undefined ? 'gallery' : type);

  /* type Images = { */
  /*   name: string, */
  /* } */
  const Images = ({ name }) => {
    let imgMarkup;
    if (galleryType === 'gallery') {
      imgMarkup = (
          <div key={name} className='gallery_item'>
            <Lightbox
              src={`/${dir}/${name}.jpg`}
              alt='foo'
              children={
                <Image
                   src={`/${dir}/${name}.jpg`}
                   alt={name}
                   width='250'
                   height='250'
                />
              } />
          </div>
      )
    } else {
      imgMarkup = (
          <div key={name}>
            <Image
               src={`/${dir}/${name}.jpg`}
               alt={name}
               width='500'
               height='500'
            />
          </div>
      )
    }
    return imgMarkup;
  }

  return (
    <div className={galleryType}>
      { images?.map((image: string) => <Images name={image} />) }
    </div>
  )
}

