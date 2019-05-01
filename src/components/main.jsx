import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Example_1 from '../forms/example_1/example_1.jsx';
import Example_2 from '../forms/example_2/example_2.jsx';
import Example_3 from '../forms/example_3/example_3.jsx';
import Example_4 from '../forms/example_4/example_4.jsx';
import Example_5 from '../forms/example_5/example_5.jsx';

class Main extends Component {
    render() {
        return (
            <main>
                <Route exact path="/example_1/" exact component={ Example_1 } />
                <Route exact path="/example_2/" exact component={ Example_2 } />
                <Route exact path="/example_3/" exact component={ Example_3 } />
                <Route exact path="/example_4/" exact component={ Example_4 } />
                <Route exact path="/example_5/" exact component={ Example_5 } />
            </main>
        )
    }
}


export default Main;
