import React, { Component } from 'react'

import megaphone from 'icons/megaphone.png';
import CustomButton from 'Components/MuiComponents/CustomButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { setModal } from 'redux/actions';
import LoginModal from 'Components/Modals/LoginModal';

function Bar(props) { 

  const matches = useMediaQuery('(min-width:600px)');

  return(
    <div id='top-bar'>
      <div className='bar-logo'>
        <img src={megaphone} alt='logo' />
      </div>
      <div className='bar-buttons'>
        <CustomButton
          text='ورود'
          color='primary'
          icon='profile'
          variant='contained'
          onClick={() => props.setModal(true, 'ورود', <LoginModal />)}
        />
        {matches && 
          <CustomButton
          text='ثبت آگهی'
          color='primary'
          icon='add'
          variant='contained'
        />}
      </div>
    </div>
  );
}

export default connect(null, {
  setModal
})(Bar);