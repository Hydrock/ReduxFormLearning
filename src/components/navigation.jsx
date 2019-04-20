import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className='navigaion-container'>
                <span className='navigation-label'>
                    Examples
                </span>
                <nav>
                    <ul>
                        <li>
                            <Link to="/example_1/">
                                Simblest Form
                            </Link>
                        </li>
                        <li>
                            <Link to="/example_2/">
                                Simblest Form 2
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navigation;
