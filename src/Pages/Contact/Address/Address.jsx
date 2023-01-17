import React from 'react';
import Buttons from '../../../components/Buttons/Buttons';
import './Address.css';
import Network from '../../../asserts/images/network.png';
import Email from '../../../asserts/images/email.png';
import Phone from '../../../asserts/images/phone.png';
import Text from '../../../asserts/images/text.png';

export default function Address() {
  return (
    <div className="address">
      <div className="address__heading">
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don not hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>

      <form action="summit">
        <h2>Contct us</h2>
        <div className="address__names">
          <div className="address__holder">
            <h3>First Name</h3>
            <input type="text" placeholder="Input your First Name in Here" />
          </div>
          <div className="address__holder">
            <h3>Last Name</h3>
            <input type="text" placeholder="Input your Last Name in Here" />
          </div>
        </div>
        <div className="address__address">
          <div>
            <h3>Email Address</h3>
            <input type="text" placeholder="Input your Email Address in Here" />
          </div>
          <div>
            <h3>Phone Number</h3>
            <input type="text" placeholder="Input your Phone Number in Here" />
          </div>

          <h3>message</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write a message"
          />
        </div>
        <Buttons content="sumit" />
      </form>

      <div className="address__SocialMedias__container">
        <div className="address__SocialMedia">
          <h2>Social media</h2>
          <img src={Network} alt="" />
        </div>

        <div className="address__SocialMedia">
          <h2>Email & phone</h2>
          <img src={Phone} alt="" />
          <img src={Email} alt="" />
        </div>

        <div className="address__SocialMedia">
          <h2>Address</h2>
          <img src={Text} alt="" />
        </div>
      </div>
    </div>
  );
}
