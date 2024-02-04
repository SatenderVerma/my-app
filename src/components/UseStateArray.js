import React, {useState} from 'react'
import '../style.css'


export const UseStateArray = () => {

    const BioData = [
        {
            id:0, myName:'satender',age:26
        },
        {
            id:1, myName:'sandy',age:28
        }
    ]

    const [myArray,setmyArray] = useState(BioData);

    const myReset = () => {
        setmyArray([]);
    }
  return (
    <>
    {
        myArray.map((curElm) => <h1 className='h1style'>Name : {curElm.myName} & Age: {curElm.age}</h1>)
        

    }
    <button onClick={myReset} className='btn'>Reset</button>
    </>
  )
}
