import React, { Component } from 'react';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_1 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Простая форма - Функчия submit от родителя</h1>
                <p>
                    Автоматическое создание Submit функции
                </p>
                <ol>
                    <li>
                        При рендере самой формы в JSX, помжно передать функцию onSummit в props <br/>
                        В этом случае форма, при submit, будет вызывать handleSubmit от redux form, а она будет искать в пропсах этого компонента функцию onSubmit
                    </li>
                </ol>
                <Form />
                <CodeHighlighter code={ codeInline } />
                <p>
                    Итого у нас есть два способа обьявить как будет обрабатываться submit формы <br/>
                    1. Прокинуть от родителя
                    2. Или обьявить в самой форме
                </p>
            </div>
        );
    }
}

export default Example_1;
