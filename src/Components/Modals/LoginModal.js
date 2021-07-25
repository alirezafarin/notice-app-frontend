import CustomButton from 'Components/MuiComponents/CustomButton';
import Input from 'Components/MuiComponents/Input';
import { connect } from 'react-redux'
import PasswordInput from 'Components/MuiComponents/PasswordInput';
import React, { useState } from 'react'
import { setModal, setAlert, setLoading, setProfile } from 'redux/actions';
import RegisterModal from './RegisterModal';
import { apiCall } from 'Components/axiosSettings';
import { addToken } from 'globalVariables/helperFunctions';
import history from 'history/history';

function LoginModal(props) {

  const [state, setState] = useState({ 
    phoneNumber: '',
    password: '',
    error: false
   });

  const areInputsEmpty = () => {
    return Object.values(state).some((value) => value.length === 0);
  }

  const loginUser = () => {
    if(areInputsEmpty()) {
      return setState({ ...state, error: true });
    }
    
    // send apiCall
    apiCall({
      url: '/user/login',
      method: 'post',
      body: {
        phoneNumber: state.phoneNumber,
        password: state.password
      },
      loading: 'login',
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }

      const token = res.data.result.token;
      addToken(token);

      const user = res.data.result.user;
      props.setProfile(user);

      props.setAlert(true, 'با موفقیت وارد شدید.', 'success');
      props.setModal(false);

      let redirectTo = localStorage.getItem('redirectAfterLogin');
      if(redirectTo) {
        history.push(redirectTo);
      }
    })

  }

  const renderButton = () => {
    return(
      <>
        <CustomButton
          text='ورود'
          variant='contained'
          color='secondary'
          textColor='white'  
          loading={props.loading}
          onClick={() => loginUser()}
        />
        <CustomButton
          text='ثبت نام'
          variant='outlined'
          color='primary'
          icon='register'  
          onClick={() => props.setModal(true, 'ثبت نام', <RegisterModal />)}
        />
      </>
    );
  }

	const returnContent = () => {
    return(
      <>
      <div className='login-modal-body'>
        <div className='input-label'>
          <span>شماره تلفن:</span>
        </div>
        <Input
          fullWidth
          error={state.error && state.phoneNumber.length === 0}
          errorText={(state.error && state.phoneNumber.length === 0) ? 'این فیلد اجباری است' : ''}
          type='number'
          value={state.phoneNumber}
          onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
        />
        <div className='input-label'>
          <span>رمز عبور:</span>
        </div>
        <PasswordInput
          value={state.password}
          errorText={(state.error && state.password.length === 0) ? 'این فیلد اجباری است' : ''}
          fullWidth
          error={state.error && state.password.length === 0}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
      </div>
      {renderButton()}
      </>
    );
  }

  return (
    <div id='login-modal'>
      <div className='login-modal-container'>
        {returnContent()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading.login
})

export default connect(mapStateToProps, {
  setModal,
  setAlert,
  setLoading,
  setProfile
})(LoginModal);
