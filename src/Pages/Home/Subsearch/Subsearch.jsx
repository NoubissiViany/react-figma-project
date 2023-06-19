import React from 'react';
import './Subsearch.css';
import Buttons from '../../../components/Buttons/Buttons';
import icon from '../../../asserts/images/icon.png';
import Searchicon from '../../../asserts/images/Seach.png';

export default function Subsearch() {
  return (
    <div className="Subsearch">
      <img className="Subsearch__img" src={Searchicon} alt="" />
      <input type="text" placeholder="Search activities or Destinations" />
      <div className=" Subsearch__content">
        <div className="content">
          <p>Guest</p>
          <span>
            2 Adult
            <p>
              <img src={icon} alt="logo" />
            </p>
          </span>
        </div>
        <div className="content">
          <p>Date</p>
          <span>
            12 - 13 April 2021
            <p>
              <img src={icon} alt="logo" />
            </p>
          </span>
        </div>
        <div className="content">
          <p>Package</p>
          <span>
            All
            <p>
              <img src={icon} alt="logo" />
            </p>
          </span>
        </div>
      </div>
      <Buttons content="Book Now" />
    </div>
  );
}
