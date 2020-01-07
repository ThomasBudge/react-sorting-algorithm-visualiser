import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { title } = props;

  return (
    <div className="title">
      <div className="container">
        <h1>{ title }</h1>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
