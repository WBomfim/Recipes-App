import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [dataFoods, setDataFoods] = useState([]);
  const [exibitionFoods, setExibitionFoods] = useState([]);

  const context = {
    dataFoods,
    setDataFoods,

    exibitionFoods,
    setExibitionFoods,
  };

  return (
    <FoodContext.Provider value={ context }>
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
