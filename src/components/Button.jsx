import React from 'react';

function Button(children, onClick, disabled, dataTestId) {
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

export default Button;
