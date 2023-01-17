import React from 'react';
import Pionter1 from '../../../asserts/images/left.png';
import Pionter2 from '../../../asserts/images/right.png';
import './Hero.css';

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <h1>Experience The Beauty of Rwanda Whith us</h1>
        <p>Discover the land of thousand hills</p>
      </div>
      <div className="Hero__pointers">
        <img src={Pionter1} alt="rignt" />
        <img src={Pionter2} alt="left" />
      </div>
    </div>
  );
}
