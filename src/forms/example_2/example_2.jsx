import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import txt from 'raw-loader!./example_1.txt';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_2 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Простая форма</h1>
                <p>
                    В этом примере мы делем две вещи.<br />
                </p>
                <ol>
                    <li>
                        Вынесли определение функции сабмита в переменную конструктора.<br/>
                        Т.е. сохранили на нее ссылку.<br/>
                        Тем самым мы можем использовать сабмит формы и в других местах - например при особых условиях.<br/>
                        Попробуйте ввести '111' - форма отправится. Это немного надуманный пример - но это может понадобиться.<br/>
                    </li>
                    <li>
                        Так же мы сократили запись обьявления Redux Form и обертки в нее нашего компонента.
                    </li>
                </ol>
                <Form />
                <CodeHighlighter code={ codeInline } />
            </div>
        );
    }
}

export default Example_2;
