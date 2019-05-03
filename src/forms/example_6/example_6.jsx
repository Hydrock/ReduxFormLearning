import React, { Component } from 'react';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_4 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Async Blur Validation </h1>
                <ol>
                    
                </ol>
                <Form />
                <CodeHighlighter code={ codeInline } />
            </div>
        );
    }
}

export default Example_4;
