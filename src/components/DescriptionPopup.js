import React from 'react';


const DescriptionPopup = ({ title, description, onClose }) => (
	<div className="overlay">
		<div className="popup">
			<h2 className="popup__header text-center">{title}</h2>
			<a className="popup__close-button" href="#" onClick={(e) => onClose(e)}>&times;</a>
			<div className="popup__content">
				{description}
			</div>
		</div>
	</div>
);

export default DescriptionPopup;