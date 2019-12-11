import React from "react";


const NumberButton = props => {
  return (
    <div>
      <button className = 'number_button' onClick={() => props.setDisplay(props.value)}>
      {props.value}
      </button>
    </div>
  );
};

export default NumberButton;