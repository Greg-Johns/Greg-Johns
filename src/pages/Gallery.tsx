import Image from 'next/image';

/* export default function Gallery({ images }: { images: [string] }) { */
/*   return ( */
/*     <div className='gallery'> */
/*       {images?.map((image) => ( */
/*           <Image */
/*             key={image} */
/*             src={`/genart/ng/${image}.jpg`} */
/*             alt={image} */
/*             width='500' */
/*             height='500' */
/*           /> */
/*         )) */
/*       } */
/*     </div> */
/*   ) */
/* } */
/**/

const Gallery = ({ images }: { images: [string]}) => (
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

export default Gallery;
