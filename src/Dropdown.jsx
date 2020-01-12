import React from 'react';
import propTypes from 'prop-types';

const Dropdown = (props) => {
  const { setAlgorithm } = props;

  return (
    <div className="dropdown">
      <select onChange={(e) => setAlgorithm(e.target.value)} className="dropdown__select">
        <option value="bubble">Bubble Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="insertion">Insertion Sort</option>
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  setAlgorithm: propTypes.func.isRequired,
};

export default Dropdown;
