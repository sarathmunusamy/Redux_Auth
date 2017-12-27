import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, browserHistory, Route, Router, hashHistory } from 'react-router';

import Features from './components/Auth/features';
import SignUpComponent from './components/Auth/signUpComponent';
import SignOutComponent from './components/auth/signOutComponent';
import SignIn from './components/Auth/signInComponent';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={SignIn} />
        <Route path="features" component={Features} />
        <Route path="signup" component={SignUpComponent} />
        <Route path="signout" component={SignOutComponent} />
      </Route>
    </Router>

  </Provider>
  , document.querySelector('.container'));
