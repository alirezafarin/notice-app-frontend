import React, { Component } from 'react'

import megaphone from 'icons/megaphone.png';
import CustomButton from 'Components/MuiComponents/CustomButton';

class Bar extends Component {
  render() {
    return (
      <div id='top-bar'>
        <div className='bar-logo'>
          <img src={megaphone} alt='logo' />
        </div>
        <div className='bar-button'>
          <CustomButton
            text='ورود'
            color='secondary'
            icon='profile'
            variant='outlined'
          />
        </div>
      </div>
    )
  }
}

export default Bar;