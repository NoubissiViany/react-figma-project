import React from 'react';
import Arrow1 from '../../../asserts/images/btn-left.png';
import Arrow2 from '../../../asserts/images/btn-right.png';
import city1 from '../../../asserts/images/city1.png';
import city2 from '../../../asserts/images/city2.png';
import city3 from '../../../asserts/images/city3.png';
import city4 from '../../../asserts/images/city4.png';
import Heading from '../../../components/Heading/Heading';
import './Destinations.css';

export default function Destinations() {
  const areas = [
    {
      image: city1,
      head: 'Kigali',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
    {
      image: city2,
      head: 'Huye',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
    {
      image: city3,
      head: 'Rubavu',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
    {
      image: city4,
      head: 'Musanze',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
  ];
  return (
    <div className="destination">
      <Heading
        title1="Popular Destinations"
        title2="Select Our Best Popular Destinations"
        marginBottom="20px"
      />
      <div className="destination__arrows">
        <img src={Arrow1} alt="arrow" />
        <img src={Arrow2} alt="arrow" />
      </div>
      <div className="destination__cards">
        {areas.map((data) => {
          return (
            <div className="destination__holder">
              <img src={data.image} alt="town" />
              <h2>{data.head}</h2>
              <p>{data.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
