import React from 'react';
import Img1 from '../../../asserts/images/Gallery/Img1.png';
import Img2 from '../../../asserts/images/Gallery/Img2.png';
import Img3 from '../../../asserts/images/Gallery/Img3.png';
import Img4 from '../../../asserts/images/Gallery/Img4.png';
import Img5 from '../../../asserts/images/Gallery/Img5.png';
import Img6 from '../../../asserts/images/Gallery/Img6.png';
import Img7 from '../../../asserts/images/Gallery/Img7.png';
import Img8 from '../../../asserts/images/Gallery/Img8.png';
import Img9 from '../../../asserts/images/Gallery/Img9.png';
import Img10 from '../../../asserts/images/Gallery/Img10.png';
import Img11 from '../../../asserts/images/Gallery/Img11.png';
import Img12 from '../../../asserts/images/Gallery/Img12.png';
import Img13 from '../../../asserts/images/Gallery/Img13.png';
import Img14 from '../../../asserts/images/Gallery/Img14.png';
import Img15 from '../../../asserts/images/Gallery/Img15.png';
import Img16 from '../../../asserts/images/Gallery/Img16.png';
import Img17 from '../../../asserts/images/Gallery/Img17.png';
import Img18 from '../../../asserts/images/Gallery/Img18.png';
import Img19 from '../../../asserts/images/Gallery/Img19.png';
import Img20 from '../../../asserts/images/Gallery/Img20.png';
import Img21 from '../../../asserts/images/Gallery/Img21.png';
import Img22 from '../../../asserts/images/Gallery/Img22.png';
import Img23 from '../../../asserts/images/Gallery/Img23.png';
import Img24 from '../../../asserts/images/Gallery/Img24.png';
import Buttons from '../../../components/Buttons/Buttons';
import './Picture.css';

const test = [
  {
    src: Img1,
  },
  {
    src: Img2,
  },
  {
    src: Img3,
  },
  {
    src: Img4,
  },
  {
    src: Img5,
  },
  {
    src: Img6,
  },
  {
    src: Img7,
  },
  {
    src: Img8,
  },
  {
    src: Img9,
  },
  {
    src: Img10,
  },
  {
    src: Img11,
  },
  {
    src: Img12,
  },
  {
    src: Img13,
  },
  {
    src: Img14,
  },
  {
    src: Img15,
  },
  {
    src: Img16,
  },
  {
    src: Img17,
  },
  {
    src: Img18,
  },
  {
    src: Img19,
  },
  {
    src: Img20,
  },
  {
    src: Img21,
  },
  {
    src: Img22,
  },
  {
    src: Img23,
  },
  {
    src: Img24,
  },
];

export default function Imgture() {
  return (
    <div className="pictures">
      <div className="pictures__btn">
        <Buttons content="Open Instagram" />
      </div>
      <div className="pictures__content">
        <div className="pictures__content__container">
          {test.map((data) => {
            return <img src={data.src} alt="" className="pic" />;
          })}
        </div>
      </div>
    </div>
  );
}
