import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        const { asyncValidating } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <fieldset disabled={ asyncValidating }>
                    <label htmlFor="firstName">firstName</label>
                    <Field
                        id="firstName"
                        name="firstName"
                        component="input"
                        type="text"
                    />
                    <hr/>
                    <button type='submit'>
                        submit
                    </button>
                </fieldset>
            </form>
        );
    }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidateFunction = (values /*, dispatch */) => {
    console.log('asyncValidateFunction');
    console.log(values);

    return sleep(1000).then(() => {
        return undefined;
    })
}

const reduxFormHOC = reduxForm({
    form: 'Form',
    asyncValidate: asyncValidateFunction,
    asyncBlurFields: ['firstName']
});

Form = reduxFormHOC(Form);

export default Form;
