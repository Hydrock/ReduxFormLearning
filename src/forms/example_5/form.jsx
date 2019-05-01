import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Form extends Component {
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        name="mainInputValue"
                        component="input"
                        type="text"
                    />
                    <button type="submit">
                        submit
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "MainForm"
})(Form);
