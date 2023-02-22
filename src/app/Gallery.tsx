import Image from 'next/image';
import React from 'react';

export default function Gallery({ dir, images }: { dir: string, images: [string] }) {

  return (
    <div className='gallery'>
      {images?.map((image) => (
          <Image
            key={image}
            src={`/${dir}/${image}.jpg`}
            alt={image}
            width='500'
            height='500'
          />
        ))
      }
    </div>
  )
}

