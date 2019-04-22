import React, { Component } from 'react';
import reducers from './combineReducers';
import Calculator from './calculator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
  render() {
    // reducerはstateを加工して新しいstateを
    // 返してくれる関数
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <Calculator message="hello world" />
      </Provider>
    );
  }
}

export default App;
