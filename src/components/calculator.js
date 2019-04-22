import React from 'react';

const Calculator = (props) => {
  return (
    <div>
      <div>value: {props.calculator.value}</div>
      <button onClick={e => props.addValue(1)}>+1</button>
      <button onClick={e => props.addValue(2)}>+2</button>
      <button onClick={e => props.multiValue(2)}>*2</button>
      <div>message: {props.message}</div>
    </div>
  );
};

export default Calculator;
