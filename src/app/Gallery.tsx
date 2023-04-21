import Image from 'next/image';
import React, { useState } from 'react';

export default function Gallery({ dir, images }: { dir: string, images: [string] }) {

  const lightbox = (who: string) => {
    /* window.alert(`clicked on: ${who}`) */

  };

  return (
    <div className='gallery'>
      {images?.map((image) => (
          //<div className='gallery_item' onClick={() => lightbox(image)}>
          <div className='gallery_item'>
            <LightBox src={'why'} alt='foo' children={
              <Image
                 key={image}
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

const LightBox = ({children, src, alt}) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div onClick={toggleIsOpen}>
			{children}
		</div>
	);
};
