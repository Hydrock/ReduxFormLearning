import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class FormTestChildren extends Component {
    onSubmit(values) {
        alert('Form Children Submit: ' + JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <Field
                    name="commonInputName"
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

FormTestChildren = reduxForm({
    form: "commonTestFormName"
})(FormTestChildren);

class FormTestParent extends Component {
    onSubmit(values) {
        alert('Parent Form Submit: ' + JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        name="commonInputName"
                        component="input"
                        type="text"
                    />
                    <button type="submit">
                        submit
                    </button>
                </form>
                <FormTestChildren />
            </div>
        );
    }
}

FormTestParent = reduxForm({
    form: "commonTestFormName"
})(FormTestParent);

export default FormTestParent;
