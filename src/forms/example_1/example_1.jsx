import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import txt from 'raw-loader!./example_1.txt';

import Form from './form.jsx';
import codeInline from '!!raw-loader!./form.jsx';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_1 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Простая форма</h1>
                <p>
                    В данном примере показывается самое простое использование Redux Form<br />
                </p>
                <ol>
                    <li>
                        первым делом нам необходимо инициализировать Redux Form<br />
                        Для этого вызываем функцию <b>reduxForm</b> и передаем ей обьект опций<br />
                        Обязательный параметр там только имя формы - оно должно быть уникально<br />
                    </li>
                    <li>
                        В результате мы получаем инстанс Redux Form (константа reduxFormHOC)<br/>
                        На самом деле в reduxFormHOC это функция которая обернет нашу форму и привяжет ее к стейту, а так же пробросить в props некоторые значения формы
                    </li>
                    <li>
                        Далее в самом компоненте формы, мы используем обычный тег <b>form</b><br/>
                        При сабмите мы можем вызвать свою собственную функцию и побработать полученные данные из формы, 
                        но нам так же нужно сказать Redux Form о том что был произведен submit, 
                        а он в свою очередь вызовет нужные экшены и подготовит для нашей кастомной функции сабмита данные из Redux State - Redux Form<br/><br/>
                        Именно поэтому мы вызваем фунцию handleSubmit (которая пришла в props из HOC redux form), и пробрасываем туда нашу кастомную 
                        функцию сабмита. На что handleSubmit возвращает функию которая при сабмите оповестит store о изменениях в форме и вызовет наш кастомный сабмит.<br/><br/>
                    </li>
                </ol>
                <Form />
                <CodeHighlighter code={ codeInline } />
            </div>
        );
    }
}

export default Example_1;
