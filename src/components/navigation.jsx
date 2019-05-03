import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Image from '../static/rf.png';

const navItems = [
    {
        path: '/example_1/',
        text: 'Simple Form (Part 1)'
    },
    {
        path: '/example_2/',
        text: 'Simple Form (Part 2)'
    },
    {
        path: '/example_3/',
        text: 'Simple Form (Part 3)'
    },
    {
        path: '/example_4/',
        text: 'Fields'
    },
    {
        path: '/example_5/',
        text: 'Form in For'
    },
    {
        path: '/example_6/',
        text: 'Async Form Validation'
    },
]

class Navigation extends Component {
    renderListItem = (navItems) => {
        return navItems.map(({ path, text }) => {
            return (
                <li className='navigation__item' key={ path }>
                    <Link to={ path }>
                        { text }
                    </Link>
                </li>
            );
        });
    }

    renderNavigation = () => {
        return (
            <nav>
                <ul className='navigation'>
                    { this.renderListItem(navItems) }
                </ul>
            </nav>
        );
    }

    render() {
        return (
            <div className='navigaion-container'>
                <img src={ Image } alt='logo' className='logo' />
                <span className='navigation-label'>
                    Examples
                </span>
                { this.renderNavigation() }
            </div>
        )
    }
}


export default Navigation;
