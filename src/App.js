import React           from 'react';
import { createStore } from 'redux';
import { Provider }    from 'react-redux';
import reducers        from './reducers/combineReducers';
import Calculator      from './containers/containerCalculator';

const App = (props) => {
  // reducerはstateを加工して新しいstateを返してくれる関数
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <Calculator message="hello world" />
    </Provider>
  );
}

//class App extends Component {
//  render() {
//    // reducerはstateを加工して新しいstateを返してくれる関数
//    const store = createStore(reducers);
//    return (
//      <Provider store={store}>
//        <Calculator message="hello world" />
//      </Provider>
//    );
//  }
//}

export default App;
