import React from 'react'

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5px 0 10px 0',
    // maxWidth: (props) => (props.maxWidth) ? props.maxWidth : '300px',
  }
}));

function Input(props) {

  const classes = useStyles(props);

  return (
    <TextField
      classes={{
        root: classes.root,
      }}
      multiline = {props.multiline}
      rows={props.rows}
      rowsMax={props.rowsMax}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
      error={props.error}
      helperText={props.errorText}
      variant="outlined"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onBlur={props.onBlur}
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default Input;
