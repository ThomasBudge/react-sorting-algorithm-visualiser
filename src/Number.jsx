import React from 'react';
import PropTypes from 'prop-types';

const Number = (props) => {
  const { number } = props;

  return (
    <div className="numbers__number">
      { number }
    </div>
  );
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default Number;
