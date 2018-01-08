import React from 'react';


const Footer = () => (
    <footer>
        <div className="row">
            <div className="col-1-of-2">
                <ul className="footer-nav">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>
            <div className="col-1-of-2">
                <ul className="social-links">
                    <li><a href="#" className="ion-social-facebook"></a></li>
                    <li><a href="#" className="ion-social-github"></a></li>
                    <li><a href="#" className="ion-social-googleplus"></a></li>
                    <li><a href="#" className="ion-social-instagram"></a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <p>
                Copyright &copy; 2018 by Troy
                </p>
        </div>
    </footer>

);

export default Footer;