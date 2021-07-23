import { useMediaQuery } from '@material-ui/core';
import NoticeCard from 'Components/CustomComponents/NoticeCard'
import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react';
import { connect } from 'react-redux'
import { getAllNotices } from 'redux/actions';

function Home(props) {

  React.useEffect(() => {
    props.getAllNotices();
  }, [])

  const matches = useMediaQuery('(max-width:599px)');

  return (
    <div id='home'>
      {matches &&
        <div className='home-add-notice-btn'>
          <CustomButton
            text='ثبت آگهی'
            color='primary'
            icon='add'
            variant='contained'
          />
        </div> 
      }
      <div className='home-notices'>
        <NoticeCard />
      </div>
    </div>
  )
}

export default connect(null, {
  getAllNotices
})(Home);