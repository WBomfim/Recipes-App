import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import RevenuesProvider from '../context/RevenuesProvider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router history={ history }>
        <RevenuesProvider>
          {component}
        </RevenuesProvider>
      </Router>,
    ),
    history,
  });
};

export default renderWithRouter;
