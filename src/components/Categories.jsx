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

  const onClickButton = async (categoryName) => {
    if (categorySelect.category === categoryName[0]) {
      if (location === 'foods') {
        const foods = await getFoods();
        setExibitionRevenues(foods);
      }

      if (location === 'drinks') {
        const drinks = await getDrinks();
        setExibitionRevenues(drinks);
      }
    } else {
      setCategorySelect({ type: location, category: categoryName[0] });
    }
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

export default Categories;
