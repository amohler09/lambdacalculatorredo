import React from "react";
import { defaultCipherList } from "constants";

const NumberButton = props => {
  return (
    <button className='number_button'>
      {props.numbers}
    </button>
  );
};

export default NumberButton;