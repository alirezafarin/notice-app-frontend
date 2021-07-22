import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ModalComponent from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import IconBtn from './IconBtn';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    margin: '8px',
    maxWidth: '1000px',
    margin: "auto"
  },
  modalHeader: {
    padding: "2px 1px 15px 0",
    fontSize: "18px"
  },
  modalBody: {
    backgroundColor: '#ffffff',
    border: "0px",
    borderRadius: '14px',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.16)',
    padding: '20px',
    outline: 'none',
    margin: '8px',
    '&:focus' : {
      border: '0px',
      boxShadow: '0px'
    },
    '&:blur' : {
      border: '0px'
    },
    width: '100%',
    maxWidth: '320px',
    maxHeight: '88vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      'display': 'none'
    }
  },
}));

export default function Modal(props) {

  let classes = useStyles(props);

  let content = (
    <div>{props.content}</div>
  );

  if(props.setContent) {
    content = props.content;
  } 

  return (
    <ModalComponent
      className={classes.modal}
      open={props.open}
      // onClose={props.onClose} //disabled close on outside click
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Grow in={props.open}>
        <div className={classes.modalBody}>
          <div className="global-modal-title-container">
            <div className='global-modal-title'>
              {props.title}
            </div>
            <IconBtn icon='close' onClick={props.onClose} color='primary'/>
          </div>
          <Divider />
          {content}
        </div>
      </Grow>
    </ModalComponent>
  )
}
