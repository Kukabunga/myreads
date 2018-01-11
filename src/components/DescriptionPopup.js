import React from 'react';


const DescriptionPopup = ({title, description, onClose}) => (
    <div className="overlay">
	<div className="popup">
		<h2>{title}</h2>
		<a className="close" href="#" onClick={(e) => onClose(e)}>&times;</a>
		<div className="content">
			{description}
		</div>
	</div>
</div>
);

export default DescriptionPopup;