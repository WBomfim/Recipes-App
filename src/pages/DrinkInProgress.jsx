import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
/* import HeaderRevenue from '../components/HeaderRevenue';
import ShowProgress from '../components/ShowProgress'; */
import Button from '../components/Button';

function DrinkInProgress() {
  const { getDataById } = useContext(RevenuesContext);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    getDataById('drinks', '17005');
  }, []);

  return (
    <>
      {/* <HeaderRevenue />
      <ShowProgress /> */}
      <Button />
    </>
  );
}

export default DrinkInProgress;
