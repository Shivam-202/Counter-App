import React from 'react';

import { useSelector } from 'react-redux';

const Another= () => {
  
  const mytext = useSelector((state) => state.thirdReducer);
  
    return (
        <>
          <h1>I am Another Component but still i can get {mytext}</h1>  
      
        </>
    );
}

export default Another;