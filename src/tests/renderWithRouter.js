import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import RevenuesProvider from '../context/RevenuesProvider';

const renderWithRouter = (component, route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
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
