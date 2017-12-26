import React, { Component } from 'react';
import SignIn from './Auth/signInComponent';
import HeaderPanel from './Auth/headerComponent';


export default class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HeaderPanel />
        {this.props.children}

      </div>
    );
  }
}
