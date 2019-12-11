import React from "react";

const OperatorButton = (props) => {
  return (
    <>
    <button className='operator_button'>
      {props.operators.value}
    </button>
    </>
  );
};

export default OperatorButton;