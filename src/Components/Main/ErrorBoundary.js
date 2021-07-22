import React from 'react';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/styles';
import ReplayIcon from '@material-ui/icons/Replay';
import { Button } from '@material-ui/core';
import { setAlert } from 'redux/actions';

const styles = theme => ({
  btn: {
    backgroundColor: '#0a97bb',
    color: 'white'
  },
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // <Alert /> not visible for root error boundary, since <App /> will be unmounted
    this.props.setAlert(true, 'مشکلی پیش آمد', 'error');
  }

  render() {
    const { classes } = this.props;

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ margin: '20px 0' }}>
            مشکلی پیش آمده لطفا دوباره تلاش کنید
          </div>
          <div>
          <Button
            size="medium"
            variant='contained'
            className={classes.btn}
            color='primary'
            onClick={() => window.location.reload()}
            startIcon={<ReplayIcon />}
          >
            <div style={{ padding: '0 10px' }}>
            تلاش دوباره
            </div>
          </Button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default connect(null, {
  setAlert
})(withStyles(styles)(ErrorBoundary));