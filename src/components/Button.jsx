import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, disabled, dataTestId }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      disabled={ disabled }
      data-testid={ dataTestId }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  dataTestId: '',
};

export default Button;
