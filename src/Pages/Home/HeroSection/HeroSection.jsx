import React from 'react';
import styles from '../../../Assets/Styles/App.module.css';
import leftBtn from '../../../Assets/Images/leftBtn .png';
import rightBtn from '../../../Assets/Images/rightBtn.png';

function HeroSection() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroContent}>
        <h1 className={styles.HeroH1}>
          Experience the beauty of Rwanda with us
        </h1>
        <p className={styles.HeroPar}>Discover the Land of a Thousand Hills</p>
      </div>
      <div className={styles.HeroBackBtns}>
        <img
          className={styles.HeroBackBtns - leftBtn}
          src={leftBtn}
          alt="leftBtn"
        />
        <img
          className={styles.HeroBackBtns - rightBtn}
          src={rightBtn}
          alt="leftBtn"
        />
      </div>
    </div>
  );
}

export default HeroSection;
