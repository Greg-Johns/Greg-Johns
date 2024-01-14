import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import './gallery.css'
import col_1 from '../../public/stuff/genart/columns/col_1.jpg'
import col_2 from '../../public/stuff/genart/columns/col_2.jpg'
import col_4 from '../../public/stuff/genart/columns/col_4.jpg'
import col_5 from '../../public/stuff/genart/columns/col_5.jpg'
import col_6 from '../../public/stuff/genart/columns/col_6.jpg'
import col_7 from '../../public/stuff/genart/columns/col_7.jpg'
import col_8 from '../../public/stuff/genart/columns/col_8.jpg'
import col_9 from '../../public/stuff/genart/columns/col_9.jpg'
import col_10 from '../../public/stuff/genart/columns/col_10.jpg'
import col_12 from '../../public/stuff/genart/columns/col_12.jpg'
import col_13 from '../../public/stuff/genart/columns/col_13.jpg'
import col_14 from '../../public/stuff/genart/columns/col_14.jpg'
import col_15 from '../../public/stuff/genart/columns/col_15.jpg'
import col_16 from '../../public/stuff/genart/columns/col_16.jpg'
import col_17 from '../../public/stuff/genart/columns/col_17.jpg'
import col_18 from '../../public/stuff/genart/columns/col_18.jpg'
import col_19 from '../../public/stuff/genart/columns/col_19.jpg'
import col_20 from '../../public/stuff/genart/columns/col_20.jpg'
import col_21 from '../../public/stuff/genart/columns/col_21.jpg'
import col_22 from '../../public/stuff/genart/columns/col_22.jpg'
import col_23 from '../../public/stuff/genart/columns/col_23.jpg'
import col_24 from '../../public/stuff/genart/columns/col_24.jpg'
import col_25 from '../../public/stuff/genart/columns/col_25.jpg'
import col_26 from '../../public/stuff/genart/columns/col_26.jpg'
import col_27 from '../../public/stuff/genart/columns/col_27.jpg'
import col_28 from '../../public/stuff/genart/columns/col_28.jpg'
import col_29 from '../../public/stuff/genart/columns/col_29.jpg'
import col_30 from '../../public/stuff/genart/columns/col_30.jpg'
import col_31 from '../../public/stuff/genart/columns/col_31.jpg'
import col_32 from '../../public/stuff/genart/columns/col_32.jpg'
import col_33 from '../../public/stuff/genart/columns/col_33.jpg'
import col_34 from '../../public/stuff/genart/columns/col_34.jpg'
import col_35 from '../../public/stuff/genart/columns/col_35.jpg'
import col_36 from '../../public/stuff/genart/columns/col_36.jpg'

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

