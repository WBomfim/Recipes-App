import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ShowRevenues from '../components/ShowRevenues';

function Foods() {
  return (
    <section>
      <Header title="Foods" />
      <SearchBar />
      <ShowRevenues />
      <Footer />
    </section>
  );
}

export default Foods;
