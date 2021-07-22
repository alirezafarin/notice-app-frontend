import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import history from 'history/history';

import 'styles/styles.css';
import ScrollToTop from 'Components/Main/ScrollToTop';
import PrivateRoute from "Components/Main/PrivateRoute";
import GlobalModal from 'Components/Main/GlobalModal';  
import GlobalAlert from './GlobalAlert';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <ScrollToTop />
          <div className='inbetween-bars'>
            <Switch>
              <Redirect to='/' />
            </Switch>
          </div>
        </Router>
        <GlobalModal />
        <GlobalAlert />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(App);