import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState] = useState(operators)
  console.log(operatorState)
  return (
    <div>
      {operatorState.map((number, index) => (
        <OperatorButton operators={number} key={index}/>
      ))}
    </div>
  );
};

export default Operators;
