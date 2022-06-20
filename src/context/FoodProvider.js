import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [food, setFood] = useState([]);

  const context = {
    food,
    setFood,
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
