import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class SignOutComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        this.props.signOut();

    }

    render() {
        return (
            <div>
                Sample Text
                </div>
        )
    }


}



export default connect(null, actions)(SignOutComponent);