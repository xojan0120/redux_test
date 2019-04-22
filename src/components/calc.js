import React from 'react';
import { connect } from 'react-redux';
import { addValueAction, multiValueAction } from '../actions/calc';

const Calculator = (props) => {
  console.log(props);
  return (
    <div>
      <div>value: {props.value}</div>
      <button onClick={e => props.addValue(1)}>+1</button>
      <button onClick={e => props.addValue(2)}>+2</button>
      <button onClick={e => props.multiValue(2)}>*2</button>
      <div>message: {props.message}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.calc);
  //console.log(ownProps);
  return state.calc;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log(ownProps);
  return ({
    addValue:   (amount) => { dispatch(addValueAction(amount)) },
    multiValue: (amount) => { dispatch(multiValueAction(amount)) },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
