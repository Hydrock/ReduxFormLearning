import React, { Component } from 'react';
import { Field, reduxForm, resetSection as resetSectionRightFromLibrare } from 'redux-form';

class Form extends Component {
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        const { handleSubmit } = this.props;

        const { reset, resetSection, dispatch } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <fieldset>
                    <label htmlFor="lastName">lastName</label>
                    <Field
                        id="lastName"
                        name="lastName"
                        component="input"
                        type="text"
                    />
                    <hr/>
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
                <hr/>
                <div>
                    <button onClick={ reset } type='button'>
                        reset form
                    </button>
                    <hr/>
                    <button onClick={ () => resetSection('lastName') } type='button'>
                        reset section (firstName)
                    </button>
                    <hr/>
                    <button onClick={ () => dispatch(resetSectionRightFromLibrare('Form', 'firstName')) } type='button'>
                        reset section (lastName)
                    </button>
                </div>
            </form>
        );
    }
}



const reduxFormHOC = reduxForm({
    form: 'Form',
});

Form = reduxFormHOC(Form);

export default Form;
