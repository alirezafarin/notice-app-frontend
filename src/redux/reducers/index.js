import { combineReducers } from 'redux';

import loadingReducer from 'redux/reducers/files/loadingReducer';
import modalReducer from 'redux/reducers/files/modalReducer';
import alertReducer from './files/alertReducer';

// Combine all reducers.
const appReducer = combineReducers({
  loading: loadingReducer,
  alert: alertReducer,
  modal: modalReducer
});

export default appReducer;