import React from 'react';
import PropTypes from 'prop-types';

function Instructions({ instructions }) {
  return (
    <div>
      <h2>Instructions</h2>
      <p data-testid="instructions">{ instructions }</p>
    </div>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
