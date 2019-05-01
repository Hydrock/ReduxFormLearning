import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class FormChildren extends Component {
    onSubmit(values) {
        alert('Form Children Submit: ' + JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <Field
                    name="childrenInputValue"
                    component="input"
                    type="text"
                />
                <button type="submit">
                    submit
                </button>
            </form>
        );
    }
}

FormChildren = reduxForm({
    form: "commonFormName"
})(FormChildren);

class FormParent extends Component {
    onSubmit(values) {
        alert('Parent Form Submit: ' + JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        name="parentInputValue"
                        component="input"
                        type="text"
                    />
                    <button type="submit">
                        submit
                    </button>
                </form>
                <FormChildren />
            </div>
        );
    }
}

FormParent = reduxForm({
    form: "commonFormName"
})(FormParent);

export default FormParent;
