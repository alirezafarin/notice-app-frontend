import React, { Component } from 'react'

import megaphone from 'icons/megaphone.png';
import CustomButton from 'Components/MuiComponents/CustomButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Bar() { 

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

export default Bar;