import { combineReducers } from 'redux';

import loadingReducer from 'redux/reducers/files/loadingReducer';
import modalReducer from 'redux/reducers/files/modalReducer';
import alertReducer from './files/alertReducer';
import noticesReducer from './files/noticesReducer';
import profileReducer from './files/profileReducer';

// Combine all reducers.
const appReducer = combineReducers({
  loading: loadingReducer,
  alert: alertReducer,
  modal: modalReducer,
  notices: noticesReducer,
  profile: profileReducer
});

export default appReducer;