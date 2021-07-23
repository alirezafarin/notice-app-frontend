import { useMediaQuery } from '@material-ui/core';
import NoticeCard from 'Components/CustomComponents/NoticeCard'
import Spinner from 'Components/CustomComponents/Spinner';
import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react';
import { connect } from 'react-redux'
import { getAllNotices } from 'redux/actions';

function Home(props) {

  React.useEffect(() => {
    props.getAllNotices();
  }, [])

  const matches = useMediaQuery('(max-width:599px)');

  const renderNotices = () => {
    return props.notices.map((notice) => {
      return <NoticeCard notice={notice} key={notice._id} />
    })
  }

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
        <Spinner
          Component={renderNotices()}
          isLoading={props.loading}
          data={props.notices}
          // noContentMsg='آگهی وجود ندارد'
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  notices: state.notices.allNotices,
  loading: state.loading.getAll  
})

export default connect(mapStateToProps, {
  getAllNotices
})(Home);