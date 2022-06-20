import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinkContext from './DrinkContext';

function DrinkProvider({ children }) {
  const [drinks, setDrinks] = useState([]);

  const context = {
    drinks,
    setDrinks,
  };

  return (
    <DrinkContext.Provider value={ context }>
      {children}
    </DrinkContext.Provider>
  );
}

DrinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinkProvider;
