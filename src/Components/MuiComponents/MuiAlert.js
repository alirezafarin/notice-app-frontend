import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '500px',
    margin: 'auto',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    left: '0px',
    right: '0px',
    bottom: '10px',
    zIndex: '2030'
  },
  action: {
    marginRight: 'auto',
    paddingLeft: '0', 
    marginLeft: '0'
  },
  icon: {
    marginLeft: '10px',
    colro: '#008e59 !important'
  },
  icon2: {
    marginLeft: '10px',
    color: '#800000 !important'
  }
}));

export default function MuiAlert(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Collapse in={props.open}>
        <Alert
          classes={{
            action: classes.action,
            icon: (props.type === 'error') ? classes.icon2 : classes.icon
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={props.onClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={props.type}
          // variant='outlined'
          >
          {props.title}
        </Alert>
      </Collapse>
    </div>
  );
}
