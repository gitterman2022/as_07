import React from 'react';
import Logo from '../../../common/Logo/Logo';
import './Footer.css';

const Footer = () => {
    return (        
        <>
        <footer className="footer-section">
        <div className="footer-container">
            <div className="box-1">
                <h3>Contact US</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Spice Mania!, Manila
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i> Call +8801xxxxxxxx
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> info@example.com
                  </li>
                </ul>
              </div>
              <div className="box-2">
                <Logo/>
                <p className="text">
                    'Spicy Blog!' not only helping your food to become tasty but can also add nutrients in your food. Excessive use of spice in food is not good, so properly using of spices can help to improve your food and correct your diet and improve your health.
                </p>
                <ul>
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-tiktok"></i>
                  </li>
                  <li>
                    <i className="fab fa-pinterest"></i>
                  </li>
                </ul>
              </div>
              <div className="box-3">
                <h3>Opening Hours</h3>
                <ul>
                  <li>Everyday</li>
                  <li>10:00 AM - 10:00 PM</li>
                </ul>
              </div>
            <div className="box-4">
                <div id="date"></div>
              <p>
                &copy; 2022 All Rights Reserved by Developer
              </p>
            </div>
        </div>
    </footer>
        </>
    );
};

export default Footer;