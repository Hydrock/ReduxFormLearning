import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ChildrenForm extends Component {
    onSubmit(values) {
        alert('ChildrenForm Submit: ' + JSON.stringify(values));
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

ChildrenForm = reduxForm({
    form: "ChildrenForm"
})(ChildrenForm);

class ParentForm extends Component {
    onSubmit(values) {
        alert('ParentForm Submit: ' + JSON.stringify(values));
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
                <ChildrenForm />
            </div>
        );
    }
}

ParentForm = reduxForm({
    form: "ParentForm"
})(ParentForm);

export default ParentForm;
