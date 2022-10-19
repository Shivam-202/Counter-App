import React from 'react';

import { useSelector } from 'react-redux';
import Another from './Another';
const StoreData = () => {
  
  const mynumber1 = useSelector((state) => state.changeTheNumber);
  
    return (
        <>
          <h1 style={{marginTop: "30rem"}}>I am Different Component but still i can get {mynumber1}</h1>  
          <Another />
        </>
    );
}

export default StoreData;