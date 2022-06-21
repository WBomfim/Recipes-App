import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';

function HeaderWithoutSearch({ title }) {
  const history = useHistory();

  return (
    <header>
      <button
        data-testid="profile-top-btn"
        type="button"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>

      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}

HeaderWithoutSearch.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  title: PropTypes.string,
}.isRequired;

export default HeaderWithoutSearch;
