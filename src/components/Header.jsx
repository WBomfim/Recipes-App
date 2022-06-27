import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, buttonSearch = false }) {
  const { searchValue, setSearchValue } = useContext(RevenuesContext);
  const [search, setSearch] = useState(false);
  const history = useHistory();

  const hendleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <header>
      <div>
        <button
          data-testid="profile-top-btn"
          type="button"
          onClick={ () => history.push('/profile') }
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="profileIcon" />
        </button>

        <h1 data-testid="page-title">{title}</h1>
        {buttonSearch && (
          <button
            data-testid="search-top-btn"
            type="button"
            onClick={ () => setSearch(!search) }
            src={ searchIcon }
          >
            <img src={ searchIcon } alt="searchIcon" />
          </button>
        )}
      </div>

      {search && (
        <input
          type="text"
          placeholder="Search"
          value={ searchValue }
          onChange={ (event) => hendleChange(event) }
          data-testid="search-input"
        />
      )}
    </header>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  title: PropTypes.string,
}.isRequired;

export default Header;
