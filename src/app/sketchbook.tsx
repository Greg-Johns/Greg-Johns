import useSWR from 'swr';
import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import './skbk.css';

interface PicName {
  name: string,
}

const cur = '#222';
const notCur = '#999';

export default function Sketchbook(
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
    <>
      <div className='slider'>
        {!data && "Loading..."}
        {
          data && data.map((
            imgPath: string, i: number) => (
              <div className='slider_img' key={imgPath}>
                <span>
                  <img
                    src={imgPath}
                    alt='name'
                    /* width='415' */
                    /* height='500' */
                  />
                  {/* <div className='slider_info'> */}
                  {/*   <h5>{getName(imgPath)}</h5> */}
                    {/* <h5>{imgPath.match(justTheName)}</h5> */}
                    {/* <h5>{imgPath}</h5> */}
                    {/* <p> */}
                    {/*   {infos[i]} */}
                    {/* </p> */}
                  {/* </div> */}
                </span>
              </div>
            )
        )}
      </div>
    </>
  )
}
