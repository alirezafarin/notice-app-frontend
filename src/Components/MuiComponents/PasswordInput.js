import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    margin: '5px 0 3px 0',
    maxWidth: '300px',
    paddingRight: '0'
  },
  iconButton: {
    margin: '0 !important'
  },
  errorText: {
    fontSize: '12.5px',
    color: '#f44336',
    margin: '0 14px'
  }
}));

function PasswordInput(props) {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <OutlinedInput
        type={values.showPassword ? 'text' : 'password'}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        fullWidth={props.fullWidth}
        error={props.error}
        classes={{
          root: classes.inputRoot
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              className={classes.iconButton}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <div className={classes.errorText}>
        <span>
          {props.errorText}
        </span>
      </div>
    </>
  )
}

export default PasswordInput;