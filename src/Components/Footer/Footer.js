import "./Footer.css"

import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
                     <div >
                                {/* <img src="images/Logo.png" alt="footer-image"> */}
                                
                                <div class="social-link">
                                {/* <a href="#"><i class="fab fa-2x fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-2x fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-2x fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-2x fa-twitter"></i></a> */}

                                <Link><FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon></Link>
                                <Link><FontAwesomeIcon className="icon" icon={faYoutube}></FontAwesomeIcon></Link>
                                <Link><FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon></Link>
                                <Link><FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon></Link>
                    
                                <p className='text-white'>copyright &copy; 2021 Anishuzzaman</p>
                                
                                </div>
            </div>

            
        </div>
    );
};

export default Footer;