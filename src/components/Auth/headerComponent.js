import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';



class HeaderPanel extends React.Component {

    constructor(props) {
        super(props);
       // this.auth = this.props.authenticated;
    }

    renderLinks() {
        let auth;

        console.log("inside renderLink", this.props.authenticated);

        if (this.props.authenticated) {
            return <li className="nav navbar-items">
                <Link to="/signout"> Signout </Link>
            </li>
        }

        return [<li className="nav navbar-items" key={1}>
            <Link to="/signin"> SignIn </Link>
        </li>, <li className="nav navbar-items" key={2}>
            <Link to="/signup"> SignUp</Link>
        </li>
        ];

    }

    render() {
        console.log("thi sis render mentho...........d");
        return (
            <div>
                <nav className="navbar navbar-light">
                    <Link to="/" className="nav navbar-brand">Redux Tutorial</Link>
                    <ul className="nav navbar-nav">
                        {this.renderLinks()}
                    </ul>

                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("updated.... stated......",state);
    
    return {
        authenticated: state.auth.authentication
    };
}

export default connect(mapStateToProps)(HeaderPanel);