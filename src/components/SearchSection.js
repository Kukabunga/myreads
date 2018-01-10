import React, { Component } from 'react';

const SearchSection = ({ }) => (
    <div className="empty-section">
        <h2 className="empy-section__header header--white">You library is empty!<br />Would you like to find new books?</h2>
        <div>
            <input type="search" className="search" />
        </div>
    </div>
);
export default SearchSection;