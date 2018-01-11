import React from 'react';
import { Link } from 'react-router-dom'

const MainHeader = () => (
    <header>
        <div className="main-header">
            <h1>Manage you own collection of books</h1>
            <Link className="btn btn-full" to="/myreads">Try it now!</Link>
        </div>
    </header>
);

export default MainHeader;