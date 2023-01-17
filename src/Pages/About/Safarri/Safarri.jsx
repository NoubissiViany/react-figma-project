import React from 'react';
import Saf1 from '../../../asserts/images/saf1.png';
import Saf2 from '../../../asserts/images/saf2.png';
import Saf3 from '../../../asserts/images/saf3.png';
import './Safarri.css';

export default function Safarri() {
  return (
    <div className="safarri">
      <h1>Welcome to Africa Wizzy Safari</h1>
      <hr />
      <div className="safarri__container">
        <div className="safarri__cards">
          <img src={Saf1} alt="no" className="safarri__img" />
          <p>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
        </div>
        <div className="safarri__cards safarri__cards--reverse">
          <p>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
          <img src={Saf2} alt="no" className="safarri__img" />
        </div>

        <div className="safarri__cards">
          <img src={Saf3} alt="no" className="safarri__img" />
          <div className="safarri__end">
            <p>
              We are proud to have received numerous awards and accolades for
              our commitment to excellence, including the RDD award and the
              Excellence award.
            </p>

            <p>
              Thank you for choosing Africa Wizzy Safari for your travel needs
              in Rwanda. We look forward to welcoming you on one of our tours
              soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
