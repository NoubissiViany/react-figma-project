import React from 'react';
import btn from '../../../asserts/images/btn.png';
import Continent from '../../../asserts/images/Africa.png';
import Web from '../../../asserts/images/social.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h1>If you have any question, Let us help you!</h1>
          <div className="footer__left__text">
            <div>
              <p>
                If you have any questions or would like to book a tour with us,
                please don not hesitate to contact us.
              </p>
            </div>

            <div>
              <span>Phone: +250 788 123 456</span>
              <br />
              <span>Email: infor@wandatourism.com</span>
              <br />
              <span>Address: Kigali, Rwanda</span>
            </div>
          </div>
          <h3>Subscribe to our newspaper</h3>
          <div className="footer__search">
            <input type="search" placeholder="Input your email here" />
            <img src={btn} alt="btn" />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__images">
            <img src={Continent} alt="country" />
            <img src={Web} alt="net" />
          </div>
          <p className="footer__p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="footer__right__text">
            <div>
              <p>Home</p>
              <p>Testimonials</p>
              <p>Destinations</p>
              <p>signinn</p>
            </div>
            <div>
              <p>About Us</p>
              <p>Packages</p>
              <p>Events</p>
              <p>Gallery</p>
            </div>
            <div>
              <p>Our Team</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <p>Copyright Africa Wizzy Safari 2022</p>
    </div>
  );
}
