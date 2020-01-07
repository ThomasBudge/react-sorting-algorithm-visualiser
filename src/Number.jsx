import React from 'react';
import PropTypes from 'prop-types';

const Number = (props) => {
  const { number, sorted } = props;

  const styles = {
    root: {
      backgroundColor: (sorted === true) ? 'green' : '#F2F2F2',
      padding: '10px',
      marginRight: '10px',
      fontSize: '22px',
      borderRadius: '2px',
    },
  };

  return (
    <div style={styles.root}>
      { number }
    </div>
  );
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default Number;
