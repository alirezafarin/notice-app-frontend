import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const useStyles = makeStyles((theme) => ({
  outlined: {
    borderColor: '#ffffff'
  },
  right: {
    color: '#0a97bb'
  },
  btn: {
    minWidth: (props) => (props.loading) ? '100px' : 'auto'
  },
  buttonPadding: {
    padding: '3px 5px',
    direction: (props) => (props.ltr) ? 'ltr' : 'rtl'
  },
  loading: {
    margin: '0 20px 0 0'
  },
  text: {
    padding: '0 10px',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center'
  }
}));

function CustomButton(props) {

  const classes = useStyles(props);

  let icons = {
    'profile': <AccountBoxIcon color='default' className={classes.icon} />,
  };

  return (
    <Button
      size="medium"
      variant={props.variant}
      color={props.color}
      className={`${classes.buttonPadding} ${props.className||''}`}
      onClick={(e) => (props.onClick) ? props.onClick(e) : null}
      disableRipple={props.disableRipple}
      fullWidth={props.fullWidth}
      classes ={{
        root: classes.btn,
        outlined: (props.icon === 'right') ? classes.outlined : ''
      }}
      // className={classes.button}
      startIcon={!props.loading&&(!props.image) ? icons[props.icon] : null}
      endIcon={!props.loading&&(props.image) ? icons[props.icon] : null}
      disabled={props.disabled||props.loading}
      component={props.component}
      href={props.href}
      target={props.target}
    >
      {props.loading && (
        // <CircularProgress className={classes.loading} size={22} thickness={3} color='inherit' />
        <div></div>
      )}
        <div className={classes.text}>{props.text}</div>
    </Button>
  )
}

export default CustomButton;