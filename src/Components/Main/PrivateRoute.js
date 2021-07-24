import React from "react";
import { Route, Redirect } from "react-router-dom";
import { returnToken } from "globalVariables/helperFunctions";
import { setAlert } from 'redux/actions';
import { connect } from "react-redux";
import { setModal } from 'redux/actions';
import LoginModal from "Components/Modals/LoginModal";

class PrivateRoute extends React.Component {

  componentDidMount() {
    if( !returnToken() ) {
      // if user not logged in open login modal and set 
      // private path to redirect user after login
      this.props.setAlert(true, 'برای مشاهده این صفحه ابتدا باید وارد شوید', 'warning');
      this.props.setModal(true, 'ورود', <LoginModal />);
      let pathName = this.props.location.pathname;
      localStorage.setItem('redirectAfterLogin', pathName);
    }
  }
  
  renderRoute() {

    this.component = this.props.component;
    return(
      // Show the component only when the user is logged in and the token is not expired
      // Otherwise, redirect the user to / page
      <Route exact render={props => (
          (returnToken()) ?
              <this.component {...props} {...this.props.computedMatch}/>  //computedMatch will pass the props.match into route as well
          : <Redirect to="/" />
      )} />
    )
  
  }

  render(){
    return(
      <React.Fragment>
        {this.renderRoute()}
      </React.Fragment>
    )
  }
  
}

export default connect(null, {
  setAlert,
  setModal
})(PrivateRoute);