import Image from 'next/image';
import React, { FC, useState } from 'react';
import Lightbox from './Lightbox';
import './gallery.css'

interface PicName {
  name: string,
}

export default function Gallery(
  { type, dir, images }: { type: string, dir: string, images: [string] }
) {
  const [galleryType, setGalleryType] = useState('gallery');

  const Images: FC<PicName> = ({ name }) => {
    let imgMarkup;
    if (galleryType === 'gallery') {
      imgMarkup = (
          <div key={name} className='gallery_item'>
            <Lightbox
              src={`/${dir}/${name}.jpg`}
              alt='foo'
            >
              <Image
                 src={`/${dir}/${name}.jpg`}
                 alt={name}
                 width='250'
                 height='250'
              />
            </Lightbox>
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

  /* let galleryType = (type === undefined ? 'gallery' : type); */

  /* type Images = { */
  /*   name: string, */
  /* } */
  return (
    <>
      <div className='gallery_buttons'>
        <button onClick={() => setGalleryType('gallery_row')}>Inline</button>
        |
        <button onClick={() =>  setGalleryType('gallery')}>Grid</button>
      </div>
      <div className={galleryType}>
        {images?.map((image) => (
          <Images
            key={image}
            name={image}
        />))}
      </div>
    </>
  )
}

