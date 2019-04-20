import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                />
                <hr/>
                <button type='submit'>
                    submit
                </button>
            </form>
        );
    }
}

const reduxFormHOC = reduxForm({
    form: 'Form' // уникальный идентификатор для этой формы
});

Form = reduxFormHOC(Form);

export default Form;
