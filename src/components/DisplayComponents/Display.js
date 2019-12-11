import React from "react";
import { defaultCipherList } from "constants";
import { tsPropertySignature } from "@babel/types";

const Display = (props) => {


  return <div className="display">{props.numbers}</div>;
};

export default Display;
