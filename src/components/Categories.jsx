import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';

function Categories() {
  const {
    dataRevenues,
    setCategorySelect,
    categorySelect,
    categories,
    setExibitionRevenues,
  } = useContext(RevenuesContext);

  const five = 5;
  const location = useLocation().pathname.split('/')[1];

  const onClickButton = async (categoryName) => {
    if (categorySelect.category === categoryName[0]) {
      setExibitionRevenues(dataRevenues);
    } else {
      setCategorySelect({ type: location, category: categoryName[0] });
    }
  };

  return (
    <section>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setExibitionRevenues(dataRevenues) }
      >
        All
      </button>
      { categories.map((category) => Object.values(category))
        .slice(0, five)
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
