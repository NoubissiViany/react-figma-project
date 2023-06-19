import React from 'react';
import PropTypes from 'prop-types';
import Play from '../../asserts/images/play.png';
import './Hero3.css';

export default function Hero3({ data, text, marginTop }) {
  return (
    <div className="hero3" style={{ marginTop }}>
      <h1 className="hero3__h1">{data}</h1>
      <div className="subhero">
        <h2>Home</h2>
        <img src={Play} alt="arrow" />
        <h3>{text}</h3>
      </div>
    </div>
  );
}

Hero3.propTypes = {
  data: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
};
