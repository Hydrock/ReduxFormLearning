import React, { Component } from 'react';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_4 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Async Blur Validation</h1>
                <p>
                    Пример асинхронной валидации
                </p>
                <ol>
                    <li>
                        Асинхронная валидация выполняется при Blure поля если при инициализации формы вы указали имя нужного поля в массиве asyncBlurField<br/>
                        Попробуйте проверить, кликнув на поле ввода, за этим убрав фокус с поля<br/>
                        Произойдет асинхронная валидация - в этом примере в консоль выводится сообщение
                    </li>
                    <li>
                        Асинхронная проверка так же выполнится перед onSubmin (submit) формы
                    </li>
                    <li>
                        Если существуют синхонные ошибки для поля, то при потере фокуса такого поля асинхронная проверка проводиться не будет
                    </li>
                    <li>
                        Если изменить поле с помощью change - асинхронная проверка выполняться не будет
                    </li>
                </ol>
                <Form />
                <CodeHighlighter code={ codeInline } />
            </div>
        );
    }
}

export default Example_4;
