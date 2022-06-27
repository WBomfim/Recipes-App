import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import '../styles/Header.css';

function Categories() {
  const {
    dataRevenues,
    setCategorySelect,
    categorySelect,
    categories,
    setExibitionRevenues,
  } = useContext(RevenuesContext);

  const location = useLocation().pathname.split('/')[1];
  const MAX_CATEGORY = 5;

  const onClickButton = (categoryName) => {
    if (categorySelect.category === categoryName[0]) {
      setExibitionRevenues(dataRevenues);
    } else {
      setCategorySelect({ type: location, category: categoryName[0] });
    }
  };

  return (
    <section className="filter-buttons">
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setExibitionRevenues(dataRevenues) }
      >
        All
      </button>
      {categories.map((category) => Object.values(category)).slice(0, MAX_CATEGORY)
        .map((categoryName) => (
          <button
            type="button"
            key={ categoryName }
            data-testid={ `${categoryName}-category-filter` }
            onClick={ () => onClickButton(categoryName) }
          >
            {categoryName}
          </button>
        ))}
    </section>
  );
}

export default Categories;
