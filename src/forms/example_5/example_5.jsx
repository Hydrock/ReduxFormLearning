import React, { Component } from 'react';

import Form from './form.jsx';
import ParentForm from './form_2.jsx';
import FormParent from './form_3.jsx';
import FormTestParent from './form_4.jsx';

import codeInline from '!!raw-loader!./form.jsx';
import codeInline2 from '!!raw-loader!./form_2.jsx';
import codeInline3 from '!!raw-loader!./form_3.jsx';
import codeInline4 from '!!raw-loader!./form_4.jsx';

import code_1 from '!!raw-loader!./code_1.js';
import code_2 from '!!raw-loader!./code_2.js';
import code_3 from '!!raw-loader!./code_3.js';

import CodeHighlighter from '../../components/code-highlight/index.jsx';

class Example_4 extends Component {
    render() {
        return (
            <div className='example-container'>
                <h1>Form in Form</h1>
                <p>
                    В этом примере я бы хотел показать что случиться если вкладывать форму в форму и как это отразится на redux sore<br />
                </p>
                <ol>
                    <li>
                        Создадим обычную Redux Form c именем <b>MainForm</b>
                    </li>
                    <li>
                        Добавим одно поле Field с именем <b>mainInputValue</b>
                    </li>
                    <li>
                        Так же обработаем sabmit формы
                    </li>
                </ol>
                <p>
                    Перед нами простейшая форма
                </p>
                <Form />
                <CodeHighlighter code={ codeInline } />
                <p>
                    в <b>store</b> мы увидим такую картину:
                </p>
                <CodeHighlighter code={ code_1 } />
                <p>
                    Мы видим обьект <b>form</b> созданый <b>редьюсером reduxForm</b><br/>
                    В нем свойство <b>MainForm (наша форма)</b><br/>
                    Этому свойству пренадлежит объект значений формы, в частности, поле с именем <b>mainInputValue</b><br/>
                    Ожидаемо...
                </p>
                <p>
                    Ожидаемо и то, что если мы создадим вторую форму и разместим ее на одном уровне вложенности с первой, в store, в обьект form, просто добавится новая запись о новой форме.<br/>
                    Ведь нет никаких пересечений. Каждая форма коннектится к store и создает отдельную запись.
                </p>
                <p>
                    Но что произойдет если создать вторую форму (обьявить с помощью reduxForm) и вложить ее в первую форму?<br/>
                    Вот таким образом...
                </p>
                <ParentForm />
                <CodeHighlighter code={ codeInline2 } />
                <p>
                    И на удивление все работает хорошо...<br/>
                    Вложенная  форма в redux store определилась как отдельная форма и все вложенные в нее поля будут принадлежать ей.<br/>
                    Вот что мы увидим в store
                </p>
                <CodeHighlighter code={ code_2 } />
                <p>
                    можно даже вложить ChildrenForm в form, это уже анипаттерн, но и в этом случае form store корректно отработает.<br/>
                    хотя и будет задваивать sabmit
                </p>
                <p>
                    окей, что будет если создать две формы с одним именем и вложить одну в другую? а поля оставить разными?
                </p>
                <FormParent />
                <CodeHighlighter code={ codeInline3 } />
                <CodeHighlighter code={ code_3 } />
                <p>
                    И тут все хорошо. Получается так что существует две формы с одним именем.<br/>
                    В store создается один обьект формы. А их этих форм привязаны к одной форме по имени и заносятся в store.
                </p>
                <p>
                    Итого:<br/>
                </p>
                <ul>
                    <li>
                        На одной странице может быть несколько форм
                    </li>
                    <li>
                        Форма (именно компонент с оберткой Redux Form / коннект к стору) может быть вложена одна в другую (при этом теги form не могут быть вложены один в другой)<br/>
                        При этом, если у этих форм разные имена, они корректно ложатся в структуру store reduxForm
                    </li>
                    <li>
                        Если у двух форм (с одним именем) будут одинаковые имена полей, они будут связанв между<br/>
                        А вот сабмиты у каждого стнанутся своими...
                        Можете попробовать ниже...
                    </li>
                </ul>
                <FormTestParent />
                <CodeHighlighter code={ codeInline4 } />
            </div>
        );
    }
}

export default Example_4;
