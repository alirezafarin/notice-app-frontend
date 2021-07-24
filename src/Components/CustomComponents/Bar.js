import React from 'react'

import megaphone from 'icons/megaphone.png';
import CustomButton from 'Components/MuiComponents/CustomButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { setModal } from 'redux/actions';
import { Link, withRouter } from 'react-router-dom';
import history from 'history/history';
import ProfileInBar from './ProfileInBar';
import IconBtn from 'Components/MuiComponents/IconBtn';

function Bar(props) { 

  const matches = useMediaQuery('(min-width:600px)');

  const renderLogoOrBackBtn = () => {
    const pathName = props.location.pathname;    
    if(pathName === '/' || pathName === '/home') {
      return(
        <Link to='/' className='bar-logo'>
          <img src={megaphone} alt='logo' />
        </Link>
      );
    }

    return(
      <IconBtn
        icon='back'
        color='secondary'
        onClick={() => history.goBack()}  
      />
    );
  }

  return(
    <div id='top-bar'>
      {renderLogoOrBackBtn()}
      <div className='bar-buttons'>
        <ProfileInBar />
        {matches && 
          <CustomButton
          text='ثبت آگهی'
          color='primary'
          icon='add'
          variant='contained'
          onClick={() => history.push('/createNotice')}
        />}
      </div>
    </div>
  );
}

export default connect(null, {
  setModal
})(withRouter(Bar));