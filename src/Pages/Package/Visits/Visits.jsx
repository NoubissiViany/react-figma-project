import React from 'react';
import Sites from '../../../components/Sites/Sites';
import './Visits.css';
import Btn1 from '../../../asserts/images/btn-left.png';
import Btn2 from '../../../asserts/images/btn-right.png';
import Footer from '../../Home/Footer/Footer';
import Heading from '../../../components/Heading/Heading';

export default function Visits() {
  return (
    <div className="visits">
      <div className="visits__content">
        <Heading
          title1="Choose your Package"
          title2="Select your Best Package for your Travel"
          marginTop="50px"
          marginBottom="50px"
        />
        <Sites marginTop="25px" />
        <Sites marginTop="25px" />
      </div>
      <div className="visits__pointers">
        <img src={Btn1} alt="al" />
        <img src={Btn2} alt="no" />
      </div>
      <Footer />
    </div>
  );
}
