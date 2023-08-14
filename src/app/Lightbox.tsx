import React, {useState, FC} from 'react';
import Image from 'next/image';
import './lightbox.css'

interface Props {
  children: any,
  src: string
  alt: string
}
const LightBox: React.FC<Props> = ({ children, src, alt }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
    console.log(src)
		setIsOpen(!isOpen);
	};

	return (
		<div onClick={toggleIsOpen}>
			{children}
			{isOpen ?
				<div className="lightbox" onClick={toggleIsOpen}>
          <div>
            <Image width='500' height='500' src={src} alt={alt} />
            <figcaption>
              {src.substring(src.lastIndexOf('/') + 1).split('.')[0]}
            </figcaption>
          </div>
				</div>
				: null}
		</div>
	);
};

export default LightBox;
