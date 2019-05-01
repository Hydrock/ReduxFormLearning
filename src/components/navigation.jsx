import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Image from '../static/rf.png';

class Navigation extends Component {
    render() {
        return (
            <div className='navigaion-container'>
                <img src={ Image } alt='logo' className='logo' />
                <span className='navigation-label'>
                    Examples
                </span>
                <nav>
                    <ul className='navigation'>
                        <li className='navigation__item'>
                            <Link to="/example_1/">
                                Simple Form (Part 1)
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to="/example_2/">
                                Simple Form (Part 2)
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to="/example_3/">
                                Simple Form (Part 3)
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to="/example_4/">
                                Fields
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to="/example_5/">
                                Form in Form
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navigation;
