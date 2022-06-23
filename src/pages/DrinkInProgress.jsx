import React, { useContext, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
/* import HeaderRevenue from '../components/HeaderRevenue';
import ShowDetailsProcess from '../components/ShowDetailsProcess'; */
import Button from '../components/Button';

function DrinkInProgress() {
  const { getDataById } = useContext(RevenuesContext);
  /* const id = useLocation().pathname.replace(/\D/g, ' '); */

  useEffect(() => {
    getDataById('drinks', '17005');
  }, []);

  return (
    <>
      {/* <HeaderRevenue />
      <ShowDetailsProcess /> */}
      <Button />
    </>
  );
}

export default DrinkInProgress;
