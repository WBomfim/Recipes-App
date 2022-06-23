import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, onClick, disabled, dataTestId }) {
  return (
    <button
      className="button-details"
      type="button"
      onClick={ onClick }
      disabled={ disabled }
      data-testid={ dataTestId }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  dataTestId: '',
};

export default Button;
