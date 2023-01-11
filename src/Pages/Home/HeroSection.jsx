import React from 'react';
import styles from '../../Assets/Styles/App.module.css';

function HeroSection() {
  return (
    <div className={styles.Hero}>
      <h1 className={styles.HeroH1}>Experience the beauty of Rwanda with us</h1>
      <p className={styles.HeroPar}>Discover the Land of a Thousand Hills</p>
    </div>
  );
}

export default HeroSection;
