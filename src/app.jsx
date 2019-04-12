import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

function testReducer(state = {}, action) {
  switch (action.type) {
    case 'TEST_ACTION':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    testReducerStore: testReducer
});

const store = createStore(rootReducer);

class App extends Component {
    buttonHandler = (store) => {
        store.dispatch({
            type: 'TEST_ACTION',
            payload: {
                text: 'test action ' + Math.random() 
            }
        })
    }

    render() {
        return (
            <Provider store={store}>
                <h1>My React App!</h1>
                <button onClick={ () => { this.buttonHandler(store) } } >test</button>
            </Provider>
        );
    }
}

export default App;