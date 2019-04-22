import { connect }              from 'react-redux';
import { addValue, multiValue } from '../actions/actionCalculator';
import Calculator               from '../components/calculator';

const mapStateToProps = (state, ownProps) => {
  return ({
    calculator: state.calculator,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    addValue:   (amount) => { dispatch(addValue(amount)) },
    multiValue: (amount) => { dispatch(multiValue(amount)) },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
