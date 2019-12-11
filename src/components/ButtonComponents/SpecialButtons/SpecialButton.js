import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {
  return (
    <>
    <button className='special_button'>
      {props.numbers}
    </button>
    </>
  );
};

export default SpecialButton;
