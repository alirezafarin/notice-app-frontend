import NoticeCard from 'Components/CustomComponents/NoticeCard'
import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react'

export default function Home() {
  return (
    <div id='home'>
      <div className='home-add-notice-btn'>
        <CustomButton
          text='ثبت آگهی'
          color='primary'
          icon='add'
          variant='contained'
        />
      </div>
      <div className='home-notices'>
        <NoticeCard />
      </div>
    </div>
  )
}
