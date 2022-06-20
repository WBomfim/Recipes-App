import React, { useState } from 'react';

function SearchBar() {
  const [searchOptions, setSearchOptions] = useState('');

  return (
    <section>
      <div>
        <label htmlFor="ingredients">
          <input
            id="ingredients"
            name="search-radio"
            type="radio"
            value="ingredients"
            data-testid="ingredient-search-radio"
          />
          Ingredients
        </label>

        <label htmlFor="name">
          <input
            id="name"
            name="search-radio"
            type="radio"
            value="name"
            data-testid="name-search-radio"
          />
          Name
        </label>

        <label htmlFor="first-letter">
          <input
            id="first-letter"
            name="search-radio"
            type="radio"
            value="first-letter"
            data-testid="first-letter-search-radio"
          />
          First letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </section>
  );
}

export default SearchBar;
