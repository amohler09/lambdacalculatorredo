import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialButton] = useState(specials);

  return (
    <div className='specials_container'>
      {specialButton.map((number, index) => (
        <SpecialButton numbers={number} key={index}/>
      ))}
    </div>
  );
};

export default Specials;
