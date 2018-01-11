import React from 'react';
import { Link } from 'react-router-dom'

const AddNewBookPopup = ({onClose}) => (
    <div className="overlay">
        <div className="popup">
            <a className="popup__close-button" href="#" onClick={(e) => onClose(e)}>&times;</a>
            <div className="popup__content text-center">
                You've just added a new book to you library!
		    </div>
            <div className="popup__goto-library text-center">
                <Link className="btn-text btn-text--green" to="/myreads">Go to my library</Link>
            </div>
        </div>
    </div>
);

export default AddNewBookPopup;