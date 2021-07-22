import { useMediaQuery } from '@material-ui/core';
import NoticeCard from 'Components/CustomComponents/NoticeCard'
import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { domain } from 'globalVariables';
import { apiCall } from 'Components/axiosSettings';
import { getNotices, setAlert, setLoading } from 'redux/actions';

function Home(props) {

  React.useEffect(() => {
    // axios.get(`${domain}/getAllnotices`)
    // .then((res) => console.log(res))

    apiCall({
          method: 'get',
          url: '/getAllnotices',
          loading: 'getAll',
          componentProps: props
        })().then((res) => console.log(res)).catch((err) => console.log(err, 'err'));
    // props.getNotices((res) => console.log(res, 'res'));
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
  getNotices,
  setLoading,
  setAlert
})(Home);