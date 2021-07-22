import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ErrorBoundary from 'Components/Main/ErrorBoundary';

import reducers from "redux/reducers";

function Root(props) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </Provider>
  )
}

export default Root;
