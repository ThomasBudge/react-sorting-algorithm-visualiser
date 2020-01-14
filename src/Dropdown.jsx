import React from 'react';
import propTypes from 'prop-types';
import Down from './img/down.svg';

const Dropdown = (props) => {
  const { setAlgorithm, algorithmTitle } = props;

  return (
    <div className="dropdown" data-algorithm="bubble">
      <div className="dropdown__algorithm">
        {algorithmTitle}
        <img src={Down} alt="dropdown menu arrow" />
      </div>
      <div className="dropdown__select">
        <ul>
          <li onClick={(e) => setAlgorithm('bubble')}>Bubble Sort</li>
          <li onClick={(e) => setAlgorithm('merge')}>Merge Sort</li>
          <li onClick={(e) => setAlgorithm('insertion')}>Insertion Sort</li>
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  setAlgorithm: propTypes.func.isRequired,
  algorithmTitle: propTypes.string.isRequired,
};

export default Dropdown;
