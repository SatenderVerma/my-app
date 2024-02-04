import React, { useState } from 'react';

export const UseState = () => {
  const [myObject, setMyObject] = useState({
    myName: 'Satender',
    myAge: 26,
    office: 'Gurugram',
  });

  const changeObject = () => {
    // spread opeartor
    setMyObject({...myObject,
        myName: 'neeraj tu to bdi badmas'
    })
  }

  return (
    <div>
      <h1 className='h1style'>Name: {myObject.myName} & Age: {myObject.myAge} & office: {myObject.office}</h1>
      <button className='btn' onClick={changeObject}>Change</button>
    </div>
  );
};
