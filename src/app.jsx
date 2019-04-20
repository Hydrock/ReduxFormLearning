import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import { HashRouter } from "react-router-dom";

import Navigation from './components/navigation.jsx';
import Main from './components/main.jsx';

import './styles/global.scss';

const rootReducer = combineReducers({
    form: formReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <Navigation />
                    <Main />
                </Provider>
            </HashRouter>
        );
    }
}

export default App;