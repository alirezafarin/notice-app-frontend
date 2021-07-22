import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles((theme) => ({
  appBarBackIcon: {
    color: '#0a97bb',
    marginRight: 'auto'
  },
  appBarSearchIcon: {
    color: '#a6a6a6'
  },
  topBarIcon: {
    color: '#a6a6a6'
  },
  whiteIcon: {
    color: '#ffffff'
  },
  addPhoto: {
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.16)'
  },
  addIcon: {
    fontSize: '30px !important'
  },
  deleteIcon: {
    fontSize: '30px !important'
  }
}));

function IconBtn(props) {

  const classes = useStyles();

  const icons = {
    'close': { 'icon': <ClearIcon/> }, 
  };

  let icon = icons[props.icon].icon;
  let className = icons[props.icon].className;

  return(
    <IconButton
      onClick={() => (props.onClick) ? props.onClick() : null}
      className={className}
      color={props.color}
      size={props.size}
      >
      {icon}
    </IconButton>
  );
}

export default IconBtn;
