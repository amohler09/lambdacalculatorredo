import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {
  return (
    <button class='special_container'>
      {props.numbers}
    </button>
  );
};

export default SpecialButton;
