import React from 'react';
import PropTypes from 'prop-types';
import FoodProvider from './FoodProvider';
import DrinkProvider from './DrinkProvider';

function CombineProviders({ children }) {
  return (
    <FoodProvider>
      <DrinkProvider>
        {children}
      </DrinkProvider>
    </FoodProvider>
  );
}

CombineProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CombineProviders;
