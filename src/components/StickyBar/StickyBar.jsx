import React from 'react';
import Social from '../../asserts/images/social.png';
import './StickyBar.css';

export default function StickyBar() {
  return (
    <div className="StickyBar">
      <div className="StickyBar__leftpart">
        <div>
          <span>
            <i className="fa-solid fa-phone-flip" />
            +250 784 688 641
          </span>
        </div>
        <span>
          <i className="fa-solid fa-envelope" />
          bbonteemma@gmail.com
        </span>
      </div>
      <div className="StickyBar__rightpart">
        <img src={Social} alt="logo" />
      </div>
    </div>
  );
}
