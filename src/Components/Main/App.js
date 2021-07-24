import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import history from 'history/history';

import 'styles/styles.css';
import ScrollToTop from 'Components/Main/ScrollToTop';
import PrivateRoute from "Components/Main/PrivateRoute";
import GlobalModal from 'Components/Main/GlobalModal';  
import GlobalAlert from './GlobalAlert';
import Home from 'Components/Routes/Home';
import Bar from 'Components/CustomComponents/Bar';
import Notice from 'Components/Routes/Notice';
import CreateNotice from 'Components/Routes/CreateNotice';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <ScrollToTop />
          <Bar />
          <div className='inbetween-bars'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/notice/:id" exact component={Notice} />
              <PrivateRoute path="/createNotice" exact component={CreateNotice} />
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
  profile: state.profile
})

export default connect(mapStateToProps)(App);