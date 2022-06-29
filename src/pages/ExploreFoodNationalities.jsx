import React, { useEffect, useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRevenues from '../components/CardRevenues';
import {
  getFoodsNacionalities,
  getFilterNacionalities,
  getFoods } from '../services/fetchFoods';
import '../styles/Explore.css';

function ExploreFoodNationalities() {
  const {
    setExibitionRevenues,
    allNacionalities,
    setAllNacionalities,
    setDataRevenues,
    dataRevenues,
  } = useContext(RevenuesContext);

  useEffect(() => {
    const getNacionalities = async () => {
      const foods = await getFoods();
      const getAllNacionalities = await getFoodsNacionalities();
      setExibitionRevenues(foods);
      setDataRevenues(foods);
      setAllNacionalities(getAllNacionalities);
    };
    getNacionalities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (value === 'All') {
      setExibitionRevenues(dataRevenues);
    } else {
      const filterNacionalities = async () => {
        const nacionalitiesFiltered = await getFilterNacionalities(value);
        setExibitionRevenues(nacionalitiesFiltered);
      };
      filterNacionalities();
    }
  };

  return (
    <main>
      <Header title="Explore Nationalities" buttonSearch />
      <section className="dropdown">
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ (e) => handleChange(e) }
        >
          <option data-testid="All-option">All</option>
          {allNacionalities
        && allNacionalities
          .map((nacionality) => Object.values(nacionality))
          .map((nacionalityName) => (
            <option
              className="dropdown-items"
              key={ nacionalityName }
              data-testid={ `${nacionalityName}-option` }
            >
              {nacionalityName}
            </option>
          ))}
        </select>
      </section>
      <CardRevenues />
      <Footer />
    </main>
  );
}

export default ExploreFoodNationalities;
