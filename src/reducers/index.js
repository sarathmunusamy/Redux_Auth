import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authDecision from './authReducers';

const rootReducer = combineReducers({
  form,
  auth:authDecision
});

export default rootReducer;
