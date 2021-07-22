import React, { Component } from 'react'

import megaphone from 'icons/megaphone.png';

class Bar extends Component {
  render() {
    return (
      <div id='top-bar'>
        <div className='bar-logo'>
          <img src={megaphone} alt='logo' />
        </div>
        <div>
          afsf
        </div>
      </div>
    )
  }
}

export default Bar;