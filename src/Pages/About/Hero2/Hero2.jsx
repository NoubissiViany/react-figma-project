import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import Monkey from '../../../asserts/images/monkey.png';
import icon from '../../../asserts/images/icon.png';
import Searchicon from '../../../asserts/images/SearchIcon.png';
import './Hero2.css';

export default function Hero2() {
  return (
    <div className="hero2">
      <img src={Monkey} alt="monkey" className="hero2__img1" />
      <NavBar />
      <img className="hero2__img2" src={Searchicon} alt="" width={25} />
      <div className="hero2__content">
        <h1>We are dedicated to providing the best travel experience.</h1>
        <p className="hero2__p">Discover the Land of a Thousand Hills</p>

        <div className="hero2__container">
          <div className="hero2__container__content">
            <p>Guest</p>
            <h4>
              2 Adult
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <div className="hero2__container__content">
            <p>Date</p>
            <h4>
              12 - 13 April 2021
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <div className="hero2__container__content">
            <p>Package</p>
            <h4>
              Akagera Tour
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <button type="button">Book Now</button>
        </div>
      </div>
    </div>
  );
}
