import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import txt from 'raw-loader!./example_1.txt';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_4 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Простая форма</h1>
                <p>
                    Fields - несколько RF полей в одном<br />
                </p>
                <ol>
                    Компонент Fields служит для обединения нескольких кастомных полей в один компонент.<br/>
                    Это почти как Field только возможно указать сразу несколько имен полей и общий кастомный компонент.
                </ol>
                <Form />
                <CodeHighlighter code={ codeInline } />
            </div>
        );
    }
}

export default Example_4;
