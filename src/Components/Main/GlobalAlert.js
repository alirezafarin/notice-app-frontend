import MuiAlert from 'Components/MuiComponents/MuiAlert';
import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'

import { setAlert } from 'redux/actions'

let timer = null;
function GlobalAlert(props) {

  const closeAlertAfter = 3000;

  useEffect(() => {
    // close the alert after few seconds
    if(props.alert.open) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        props.setAlert(false, props.alert.title, props.alert.type)
      }, closeAlertAfter);
    }
  }, [props.alert.open])

  return (
    <MuiAlert
      open={props.alert.open}
      onClose={() => props.setAlert(false, props.alert.title, props.alert.type)}
      title={props.alert.title}
      type={props.alert.type}
    />
  )
}

const mapStateToProps = (state) => ({
  alert: state.alert
})

export default connect(mapStateToProps, {
  setAlert
})(GlobalAlert)
