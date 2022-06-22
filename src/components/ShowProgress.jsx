import React, { useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';

function ShowProgress() {
  const { exibitionDetails } = useContext(RevenuesContext);
  console.log(exibitionDetails);
  return (
    <section>
      fdfdsa
    </section>
  );
}

export default ShowProgress;
