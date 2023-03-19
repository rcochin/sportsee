import React from 'react';
import PropTypes from 'prop-types';
import './DailyStats.css';

const DailyStats = ({ type, value, unit, image }) => {
  return (
    <div className='nutrition-container'>
      <figure>
        <img alt='icone-nutrition' src={image} />
      </figure>
      <div>
        <h3>
          {value} {unit}
        </h3>
        <p>{type}</p>
      </div>
    </div>
  );
};

DailyStats.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DailyStats;