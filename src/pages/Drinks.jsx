import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ShowRevenues from '../components/ShowRevenues';

function Drinks() {
  return (
    <section>
      <Header title="Drinks" buttonSearch />
      <SearchBar />
      <ShowRevenues />
      <Footer />
    </section>
  );
}

export default Drinks;
