import React from 'react';
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SignIn extends React.Component {

    submitHandler({ email, password }) {

        this.props.signInAction({ email, password });
    }
    render() {
        const { handleSubmit, field: { email, password } } = this.props;
        return (

            <form onSubmit={handleSubmit(this.submitHandler.bind(this))}>
                <fieldset className='form-group'>
                    <lable>Email</lable>
                    <Field name="email"
                        component="input"
                        type="text"
                        className="form-control" />
                </fieldset>

                <fieldset className='form-group'>
                    <lable>Password</lable>
                    <Field name="password"
                        component="input"
                        type="password"
                        className="form-control" />

                </fieldset >
                <button action='submit' className="btn btn-primary">Sign in </button>

            </ form>
        )
    }

}
export default reduxForm({
    form: 'sigin',
    field: ['email', 'password']
})(connect(null, actions)(SignIn));