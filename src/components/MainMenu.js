import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class MainMenu extends Component {
    state = {  }
    render() {
        return (
            <nav>
            <div className="row">
                <div><i className="icon-huge ion-bonfire"></i></div>
                <ul className="main-nav">
                    <li><Link to="/search"><i className="search-icon ion-android-search"></i></Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/myreads">MyReads</Link></li>
                </ul>
            </div>
        </nav>
        );
    }
}
export default MainMenu;