import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit }>
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

Form = reduxForm({
    form: 'Form' // уникальный идентификатор для этой формы
})(Form);

// Компонент обертка
class FormParent extends Component {
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <Form onSubmit={ this.onSubmit } />
        );
    }
}

export default FormParent;
