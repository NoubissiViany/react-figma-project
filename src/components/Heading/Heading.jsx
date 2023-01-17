import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

function Heading({ title1, title2, marginTop, marginBottom }) {
  return (
    <div className="Heading" style={{ marginTop, marginBottom }}>
      <h3 className="Heading__h3">{title1}</h3>
      <h2 className="Heading__h2">{title2}</h2>
    </div>
  );
}

export default Heading;

Heading.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
  marginBottom: PropTypes.string.isRequired,
};
