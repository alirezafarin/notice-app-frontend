import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react'

export default function Home() {
  return (
    <div id='home'>
      <div className='home-container'>
        <CustomButton
          text='ثبت آگهی'
          color='primary'
          icon='add'
          variant='outlined'
        />
      </div>
    </div>
  )
}
