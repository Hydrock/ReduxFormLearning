import React, { Component } from 'react';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_4 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Reset Form</h1>
                <p>
                    В это примере продемонстрировано как сбромить всю форму или ее часть.
                </p>
                <ul>
                    <li>
                        Параметры (reset, resetSection, dispatch) мы получаем из props которые передает обертка 
                        reduxForm
                    </li>
                </ul>
                <Form />
                <CodeHighlighter code={ codeInline } />
            </div>
        );
    }
}

export default Example_4;
