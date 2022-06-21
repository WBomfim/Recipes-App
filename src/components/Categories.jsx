import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';

function Categories({ categories, recipeType }) {
  const { setCategorySelect } = useContext(RevenuesContext);
  const five = 5;

  const onClickButton = (categoryName) => {
    setCategorySelect({ type: recipeType, category: categoryName[0] });
  };

  return (
    <section>
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default Categories;
