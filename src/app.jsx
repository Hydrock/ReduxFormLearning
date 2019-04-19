import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'

import FirstForm from './forms/first_form.jsx';
import SecondForm from './forms/second_form.jsx';

function testReducer(state = {}, action) {
  switch (action.type) {
    case 'TEST_ACTION':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    testReducerStore: testReducer,
    form: formReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
                <h1>
                    My React App!
                </h1>
                <button onClick={ () => { this.buttonHandler(store) } } >
                    test
                </button>
                <hr/>
                <FirstForm />
                <SecondForm />
            </Provider>
        );
    }
}

export default App;