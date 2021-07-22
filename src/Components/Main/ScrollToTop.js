import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {

  componentDidUpdate(prevProps, prevState) {
    if( this.props.location !== prevProps.location ) {
      window.scrollTo(0, 0);
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);