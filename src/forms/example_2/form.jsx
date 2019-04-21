import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Form extends Component {
    constructor(props) {
        super();
        this.formSubmit = props.handleSubmit(this.onSubmit);
    }

    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <form onSubmit={ this.formSubmit }>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    onChange={
                        (event, newValue, previousValue, name) => {
                            if (newValue === "111") {
                                this.formSubmit();
                            }
                        }
                    }
                />
                <hr/>
                <button type="submit">
                    submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: "Form"
})(Form);
