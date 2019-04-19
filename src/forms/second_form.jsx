import React, { Component } from 'react';
import { Field, reduxForm, FormSection } from 'redux-form';

class SecondForm extends Component {
    formSubmit = (values) => {
        console.log(values);
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <fieldset disabled={submitting}>
                <legend>
                    Second Form
                </legend>
                <form
                    action='https://jsonplaceholder.typicode.com/posts'
                    method='GET'
                    onSubmit={ handleSubmit(this.formSubmit) }
                >
                    <FormSection name='formsection.formsection2'>
                        <Field
                            name="firstInput"
                            type="text"
                            component='input'
                            label="firstInput"
                            // validate={[this.fieldSelfValidation]}
                        />
                    </FormSection>
                </form>
            </fieldset>
        );
    }
}

const createReduxForm = reduxForm({
    form: 'SecondForm',
    // validate: allFormSynkValidate,
    // warn: warnFormSynkValidate,
    // asyncValidate: asyncValidate
});

// evaluate it for ContactForm component
SecondForm = createReduxForm(SecondForm)

export default SecondForm;
