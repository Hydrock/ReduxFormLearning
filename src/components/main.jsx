import React, { Component } from 'react';
import { Route } from "react-router-dom";

// import FirstForm from './forms/first_form.jsx';
// import SecondForm from './forms/second_form.jsx';

import Example_1 from '../forms/example_1/example_1.jsx';

class Main extends Component {
    render() {
        return (
            <main>
                <Route exact path="/example_1/" exact component={ Example_1 } />
                <Route exact path="/example_2/" exact component={ Example_1 } />
            </main>
        )
    }
}


export default Main;
