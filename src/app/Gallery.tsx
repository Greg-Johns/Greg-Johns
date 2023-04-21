import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './gallery.css'

export default function Gallery({ dir, images }: { dir: string, images: [string] }) {

  return (
    <div className='gallery'>
      {images?.map((image) => (
          <div key={image} className='gallery_item'>
            <Lightbox
              src={`/${dir}/${image}.jpg`}
              alt='foo'
              children={
                <Image
                   src={`/${dir}/${image}.jpg`}
                   alt={image}
                   width='250'
                   height='250'
                />
              } />
          </div>
        ))
      }
    </div>
  )
}

