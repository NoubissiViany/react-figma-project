import React from 'react';
import Sites from '../../../components/Sites/Sites';
import Heading from '../../../components/Heading/Heading';

function Cards() {
  return (
    <div className="cards__container">
      <Heading
        title1="Choose your Package"
        title2="Select your Best Package for your Travel"
        marginTop="50px"
        marginBottom="50px"
      />
      <Sites />
    </div>
  );
}

export default Cards;
