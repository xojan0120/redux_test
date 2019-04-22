import { combineReducers } from 'redux';
import reducerCalculator   from './reducerCalculator'

export default combineReducers({
  calculator: reducerCalculator,
})
