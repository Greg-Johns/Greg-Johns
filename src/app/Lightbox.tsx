import React, {useState} from 'react';
import Image from 'next/image';
import './lightbox.css'

const LightBox = ({ children, src, alt }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div onClick={toggleIsOpen}>
			{children}
			{isOpen ?
				<div className="lightbox" onClick={toggleIsOpen}>
					<Image src={src} alt={alt} />
				</div>
				: null}
		</div>
	);
};

export default LightBox;
