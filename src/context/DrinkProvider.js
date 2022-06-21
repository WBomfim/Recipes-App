import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinkContext from './DrinkContext';

function DrinkProvider({ children }) {
  const [dataDrinks, setDataDrinks] = useState([]);
  const [exibitionDrinks, setExibitionDrinks] = useState([]);

  const context = {
    dataDrinks,
    setDataDrinks,

    exibitionDrinks,
    setExibitionDrinks,
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
