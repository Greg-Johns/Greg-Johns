import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import './gallery.css'

interface PicName {
  name: string,
}

const cur = '#222';
const notCur = '#999';

export default function Gallery(
  { type, dir, images }: { type: string, dir: string, images: [string] }
) {
  const [galleryType, setGalleryType] = useState(type === undefined ? 'gallery' : type);
  const [inlineColor, setInlineColor] = useState(notCur);
  const [gridColor, setGridColor] = useState(notCur);

  const setGallery = (t: string) => {
    if (t === 'gallery_row') {
      setGridColor(notCur)
      setInlineColor(cur)
    } else {
      setGridColor(cur)
      setInlineColor(notCur)
    }
    setGalleryType(t)
  }


  useEffect(() => {
    return () => {
      if(type === 'gallery_row') {
        setInlineColor(cur)
      } else {
        setGridColor(cur)
      }
    }
  }, [type])

  const Images: FC<PicName> = ({ name }) => {
    let imgMarkup;
    if (galleryType === 'gallery') {
      imgMarkup = (
          <div key={name} className='gallery_item'>
            <Lightbox
              /* src={`/${dir}/${name}.jpg`} */
              src={name}
              alt='foo'
              img_array={images}
              dir={dir}
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

  return (
    <>
      <div className='gallery_buttons'>
        <button className='inline' onClick={() => setGallery('gallery_row')}>
          <svg width="26" height="6" viewBox="0 0 30 8" fill="none">
            <rect width="6" height="6" fill={inlineColor} />
            <rect x="10" width="6" height="6" fill={inlineColor} />
            <rect x="20" width="6" height="6" fill={inlineColor} />
          </svg>
        </button>
        <button onClick={() =>  setGallery('gallery')}>
          <svg width="14" height="14" viewBox="0 0 19 18" fill="none">
            <rect width="6" height="6" fill={gridColor}/>
            <rect x="10" width="6" height="6" fill={gridColor}/>
            <rect y="10" width="6" height="6" fill={gridColor}/>
            <rect x="10" y="10" width="6" height="6" fill={gridColor}/>
          </svg>
        </button>
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

