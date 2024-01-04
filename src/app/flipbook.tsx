import useSWR from 'swr';
import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import './flip.css';

interface PicName {
  name: string,
}

const cur = '#222';
const notCur = '#999';

export default function FlipBook(
  { dir, infos }: { dir: string, infos: [string] }
) {
  const [inlineColor, setInlineColor] = useState(notCur);
  const [gridColor, setGridColor] = useState(notCur);
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data } = useSWR(dir, fetcher);
  const justTheName = /[^/]*$/;
  const getName = (str: string) => {
    const nameExt = str.match(/[^/]*$/)?.toString();
    return nameExt?.substr(0, nameExt.lastIndexOf('.'));
  };

  return (
    <div className="book-gallery">
      {!data && "Loading..."}
      {
        data && data.map((
          imgPath: string, i: number) => (
            <div key={imgPath}>
              <input type="checkbox" className="chk-flip" id="page-1" name="page-1"/>
              <section className="page">
                <label className="lbl-flip" htmlFor="page-1"></label>
                <article className="front-page">					
                  <figure>
                    <figcaption>Foo</figcaption>
                  </figure>					
                  <span>
                    <img
                      src={imgPath}
                      alt='name'
                      width='330px'
                      height='500px'
                    />
                  </span>
                </article>
                <article className="back-page">				
                  <figure>
                    <figcaption>bar</figcaption>
                  </figure>					
                </article>
              </section>
            </div>
          )
      )}
  </div>
  )
}
		/**/
  /*                     <div className='slider_img' key={imgPath}> */
  /*                 <span> */
  /*                   <img */
  /*                     src={imgPath} */
  /*                     alt='name' */
  /*                   /> */
  /*                 </span> */
  /*               </div> */
		/**/
		/**/
		/* 	<input type="checkbox" className="chk-flip" id="page-1" name="page-1"/> */
		/* 	<section className="page"> */
		/* 		<label className="lbl-flip" htmlFor="page-1"></label> */
		/* 		<article className="front-page">					 */
		/* 			<figure> */
		/* 				<figcaption>Foo</figcaption> */
		/* 			</figure>					 */
		/* 		</article> */
		/* 		<article className="back-page">				 */
		/* 			<figure> */
		/* 				<figcaption>bar</figcaption> */
		/* 			</figure>					 */
		/* 		</article> */
		/* 	</section> */

		/* 	<input type="checkbox" className="chk-flip" id="page-2" name="page-2"/> */
		/* 	<section className="page"> */
		/* 		<label className="lbl-flip" htmlFor="page-2"></label> */
		/* 		<article className="front-page">					 */
		/* 			<figure> */
		/* 				<figcaption>baz</figcaption> */
		/* 			</figure>					 */
		/* 		</article> */
		/* 		<article className="back-page">				 */
		/* 			<figure> */
		/* 				<figcaption>boop</figcaption> */
		/* 			</figure>					 */
		/* 		</article> */
		/* 	</section> */
		/* </div> */
		/**/
