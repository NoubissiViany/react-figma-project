import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import styles from '../Assets/Styles/App.module.css';

function NavBar() {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.NavContent}>
        <img src={logo} alt="Logo" width={100} />
        <div className={styles.NavBar}>
          <Link className={styles.NavLink} to="/">
            Home
          </Link>
          <Link className={styles.NavLink} to="about">
            About
          </Link>
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
      </div>
      <button className={styles.NavBtn} type="submit">
        Sign In
      </button>
    </div>
  );
}
export default NavBar;
