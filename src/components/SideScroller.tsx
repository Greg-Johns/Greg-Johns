import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import './sliders.css';

function getName(str: string) {
  const nameExt = str.match(/[^/]*$/)?.toString();
  return nameExt?.substring(0, nameExt.lastIndexOf('.')) || '';
}

export default async function SideScroller(
  { dir, infos }: { dir: string; infos: string[] }
) {
  const filenames = (await fs.readdir(path.join(process.cwd(), 'public', dir))).sort();
  const images = filenames.map((name) => path.posix.join('/', dir, name));

  return (
    <div className='slider'>
      {images.map((imgPath, i) => (
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
