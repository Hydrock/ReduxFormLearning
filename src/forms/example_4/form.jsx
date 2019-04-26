import React, { Component } from "react";
import { Field, Fields, reduxForm } from "redux-form";

const renderFields = (fields) => {
    return (
        <div>
            <div className="input-row">
                <label>
                    { fields.firstName.input.name }
                </label>
                <input {...fields.firstName.input} type="text"/>
                {fields.firstName.meta.touched && fields.firstName.meta.error &&
                <span className="error">{fields.firstName.meta.error}</span>}
            </div>
            <div className="input-row">
                <label>
                    { fields.lastName.input.name }
                </label>
                <input {...fields.lastName.input} type="text"/>
                {fields.lastName.meta.touched && fields.lastName.meta.error &&
                <span className="error">{fields.lastName.meta.error}</span>}
            </div>
        </div>
    )
}

class Form extends Component {
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <Fields
                    names={["firstName", "lastName"]}
                    component={ renderFields }
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
