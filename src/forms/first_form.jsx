import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import { SubmissionError } from 'redux-form';

let count = 0;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class FirstForm extends Component {
    submit = (values) => {
        console.log(values)
        return sleep(3000).then(() => {
            if (values.firstInput === '1') {
                console.log('SubmissionError')
                throw new SubmissionError({
                    firstInput: 'no 1',
                    _error: 'Login failed!'
                })
            } else if (values.secondInput === '2') {
                console.log('SubmissionError')
                throw new SubmissionError({
                    secondInput: 'no 2',
                    _error: 'Login failed!'
                })
            }
        });
    }

    // кастомный компонент поля
    // реализована ошибка и предупреждение
    renderField = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
    }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched &&
                        ((error && <span style={{color: 'red'}}>{error}</span>) ||
                            (warning && <span style={{color: 'orange'}}>{warning}</span>))}
                </div>
            </div>
        )

    // валидация на уровне самого поля
    fieldSelfValidation = (value) => {
        count = ++count;
        console.log('fieldSelfValidation', count);
        return !value ? 'fieldSelfValidation error - no empty' : undefined
    }
    
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <p>
                    GET https://jsonplaceholder.typicode.com/posts
                </p>
                <fieldset disabled={ submitting }>
                    <legend>FirstForm</legend>
                    <form
                        action='https://jsonplaceholder.typicode.com/posts'
                        method='GET'
                        onSubmit={ handleSubmit(this.submit) }
                    >
                        <Field
                            name="firstInput"
                            type="text"
                            component={ this.renderField }
                            label="firstInput"
                            validate={[this.fieldSelfValidation]}
                        />

                        <Field
                            name="secondInput"
                            type="text"
                            component={ this.renderField }
                            label="secondInput"
                            validate={[this.fieldSelfValidation]}
                        />

                        <hr/>

                        <button type="submit">
                            Submit
                        </button>
                    </form>

                    
                </fieldset>
            </div>
        );
    }
}

const allFormSynkValidate = values => {
    const errors = {};
    count = ++count;
    console.log('allFormSynkValidate', count);

    if (values.firstInput === '10') {
        errors.firstInput = 'allFormSynkValidate error - no 10 value';
    }

    if (!values.firstInput) {
        errors.firstInput = 'allFormSynkValidate error - no empty';
    }

    if (values.secondInput === '10') {
        errors.secondInput = 'allFormSynkValidate error - no 10 value';
    }

    if (!values.secondInput) {
        errors.secondInput = 'allFormSynkValidate error - no empty';
    }

    return errors;
}

const warnFormSynkValidate = values => {
    const warnings = {}
    if (values.firstInput && values.firstInput.length < 4) {
      warnings.firstInput = 'hmmm, string so short...'
    }
    return warnings
}

const asyncValidate = (values /*, dispatch */) => {
    console.log('asyncValidate')
    return sleep(1000).then(() => {
      // simulate server latency
        if (false) {
            throw { secondInput: 'asyncValidate error' }
        }
    })
  }

// create new, "configured" function
const createReduxForm = reduxForm({
    form: 'FirstForm',
    validate: allFormSynkValidate,
    // warn: warnFormSynkValidate,
    // asyncValidate: asyncValidate
});

// evaluate it for ContactForm component
FirstForm = createReduxForm(FirstForm)


export default FirstForm;

// после обертки компонента в форму - он получает следующие пропсы
/*
anyTouched: false
array: {insert: ƒ, move: ƒ, pop: ƒ, push: ƒ, remove: ƒ, …}
asyncValidate: ƒ (name, value, trigger)
asyncValidating: false
autofill: ƒ ()
blur: ƒ ()
change: ƒ ()
clearAsyncError: ƒ ()
clearFields: ƒ ()
clearSubmit: ƒ ()
clearSubmitErrors: ƒ ()
destroy: ƒ ()
dirty: false
dispatch: ƒ e(n)
error: undefined
form: "FirstForm"
handleSubmit: ƒ (submitOrEvent)
initialValues: undefined
initialize: ƒ ()
initialized: false
invalid: false
pristine: true
pure: true
reset: ƒ ()
resetSection: ƒ ()
submit: ƒ ()
submitAsSideEffect: false
submitFailed: false
submitSucceeded: false
submitting: false
touch: ƒ ()
triggerSubmit: undefined
untouch: ƒ ()
valid: true
warning: undefined
_reduxForm: null
*/
