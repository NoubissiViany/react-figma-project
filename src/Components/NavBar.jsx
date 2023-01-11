import React from 'react';
import logo from '../Assets/Images/logo.png';
import styles from '../Assets/Styles/App.module.css';

function NavBar() {
  return (
    <div className={styles.NavContainer}>
      <img className={styles.NavImg} src={logo} alt="Logo" />
      <div className={styles.NavBar}>
        <a className={styles.NavLink} href="home">
          Home
        </a>
        <a className={styles.NavLink} href="home">
          About
        </a>
        <a className={styles.NavLink} href="home">
          Tour package
        </a>
        <a className={styles.NavLink} href="home">
          Gallery
        </a>
        <a className={styles.NavLink} href="home">
          Blog
        </a>
        <a className={styles.NavLink} href="home">
          Contact us
        </a>
      </div>
      <button className={styles.NavBtn} type="submit">
        Sign In
      </button>
    </div>
  );
}
export default NavBar;
