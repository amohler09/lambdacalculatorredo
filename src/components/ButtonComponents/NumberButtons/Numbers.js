import React, {useState} from "react";
import {numbers} from '../../../data.js'
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberButton] = useState(numbers);

  return (
    <div className='numbers_container'>
       {numberButton.map((number, index) => (
      <NumberButton numbers={number} key={index}/>
       ))}
    </div>
  )
};


export default Numbers;