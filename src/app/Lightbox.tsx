import React, {useState} from 'react';
import './lightbox.css'

//const LightBox = ({ children, src, alt, wrapper = 'div' }) => {
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
					<img src={src} alt={alt} />
				</div>
				: null}
		</div>
	);
};

export default LightBox;
