import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import { getFoods } from '../services/fetchFoods';
import { getDrinks } from '../services/fetchDrinks';

function Categories() {
  const {
    setCategorySelect,
    categorySelect,
    categories,
    setExibitionRevenues } = useContext(RevenuesContext);

  const five = 5;
  const location = useLocation().pathname.split('/')[1];

  const getAllRecipes = async () => {
    if (location === 'foods') {
      const foods = await getFoods();
      setExibitionRevenues(foods);
    }

    if (location === 'drinks') {
      const drinks = await getDrinks();
      setExibitionRevenues(drinks);
    }
  };
  const onClickButton = async (categoryName) => {
    if (categorySelect.category === categoryName[0]) {
      await getAllRecipes();
    } else {
      setCategorySelect({ type: location, category: categoryName[0] });
    }
  };

  return (
    <section>

      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => getAllRecipes() }
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
