import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUpComponent extends React.Component {
    handlerSubmit({ email, password, confirmPassword }) {
        this.props.signUpAction({ email, password });
    }

    render() {

        const { handleSubmit, field: { email, password, confirmPassword } } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handlerSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <Field type="text" component="input" name="email" className="form-control" />
                </fieldset>

                <fieldset className='form-group'>
                    <label>Password:</label>
                    <Field type="Password" component="input" name="password" className="form-control" />
                </fieldset>
                <button action='submit' className="btn btn-primary">SignUp</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signup',
    field: ['email', 'password', 'confirmPassword']
})(connect(null, actions)(SignUpComponent));

