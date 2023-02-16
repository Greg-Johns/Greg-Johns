import Image from 'next/image';
import React from 'react';

export default function Gallery({ images }: { images: [string] }) {

  return (
    <div className='gallery'>
      {images?.map((image) => (
          <Image
            key={image}
            src={`/genart/ng/${image}.jpg`}
            alt={image}
            width='500'
            height='500'
          />
        ))
      }
    </div>
  )
}

