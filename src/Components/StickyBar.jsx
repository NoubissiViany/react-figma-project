import React from 'react';
import phone from '../Assets/Images/phone.png';
import email from '../Assets/Images/email.png';
import social from '../Assets/Images/social .png';
import styles from '../Assets/Styles/App.module.css';

function StickyBar() {
  return (
    <div className={styles.StickyBar}>
      <div className={styles.StickyContainer}>
        <img src={phone} alt="Phone" />
        <p className={styles.StickyP}>+250 784 688 641</p>
        <img className={styles.StickyImg} src={email} alt="Email" />
        <p className={styles.StickyP}>bbonteemma@gmail.com</p>
      </div>
      <div className={styles.StickySocial}>
        <img src={social} alt="Social Media Icons" />
      </div>
    </div>
  );
}
export default StickyBar;
