import React from 'react'

import profile from 'icons/profile.png';
import CustomButton from 'Components/MuiComponents/CustomButton';
import { connect } from 'react-redux';
import { setModal, setProfile, setAlert, setLoading } from 'redux/actions';
import LoginModal from 'Components/Modals/LoginModal';
import { logOut, returnToken } from 'globalVariables/helperFunctions';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoutModal from 'Components/Modals/LogoutModal';
import { apiCall } from 'Components/axiosSettings';
import HomeIcon from '@material-ui/icons/Home';
import history from 'history/history';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-evenly ',
    color: '#f44336',
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// const useStyles = makeStyles((theme) => ({

// });

function ProfileInBar(props) { 

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const returnButton = () => {

    if( !returnToken() ) {
      return(
        <CustomButton
          text='ورود'
          color='primary'
          icon='profile'
          variant='contained'
          onClick={() => props.setModal(true, 'ورود', <LoginModal />)}
        />
      );
    }
    
    const logUserOut = () => {
          
    // send apiCall
    apiCall({
      url: '/user/logout',
      method: 'get',
      loading: 'login',
      token: true,
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }
      logOut(() => props.setProfile({}));
      props.setModal(false);
      props.setAlert(true, 'با موفقیت خارج شدید', 'success');
    })
    }

    return (
      <>
        <CustomButton
          text={'علیرضا آفرین زاده'}
          icon='profilePhoto'
          image={profile}
          ltr
          onClick={handleClick}

        />
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        <StyledMenuItem
          color='secondary'
          onClick={() => history.push('/')}
        >
          <HomeIcon color='secondary' />
          <span className='home-color'>خانه</span>
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => 
            props.setModal(true, 'خروج', <LogoutModal
              closeModal={() => props.setModal(false)}
              logout={logUserOut} />)}
        >
          <ExitToAppIcon color='inherit' />
          <span>خروج</span>
        </StyledMenuItem>
      </StyledMenu>
      </>
    );
  }

  return(
    <>
      {returnButton()}
    </>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps, {
  setModal,
  setProfile,
  setAlert,
  setLoading
})(ProfileInBar);