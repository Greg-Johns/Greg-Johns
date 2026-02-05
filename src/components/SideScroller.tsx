"use client";
import useSWR from 'swr';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import './sliders.css';

interface PicName {
  name: string;
}

const cur = '#222';
const notCur = '#999';

export default function SideScroller(
  { dir, infos }: { dir: string; infos: string[] }
) {
  const [inlineColor, setInlineColor] = useState(notCur);
  const [gridColor, setGridColor] = useState(notCur);

  const fetcher = useCallback((url: string) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    }), []
  );

  const { data, error, isLoading } = useSWR(dir, fetcher);

  const getName = useCallback((str: string) => {
    const nameExt = str.match(/[^/]*$/)?.toString();
    return nameExt?.substring(0, nameExt.lastIndexOf('.')) || '';
  }, []);

  if (error) return <div>Failed to load images</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='slider'>
      {data?.map((imgPath: string, i: number) => (
        <div className='slider_img' key={imgPath}>
          <span>
            <Image
              src={imgPath}
              alt={getName(imgPath) || 'Image'}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <div className='slider_info'>
              <h5>{getName(imgPath)}</h5>
              <p>{infos[i]}</p>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
}
