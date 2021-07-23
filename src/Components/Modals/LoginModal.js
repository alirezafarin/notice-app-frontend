import CustomButton from 'Components/MuiComponents/CustomButton';
import Input from 'Components/MuiComponents/Input';
import { connect } from 'react-redux'
import PasswordInput from 'Components/MuiComponents/PasswordInput';
import React, { useState } from 'react'
import { setModal } from 'redux/actions';
import RegisterModal from './RegisterModal';

function LoginModal(props) {

  const [state, setState] = useState({ 
    phoneNumber: '',
    password: '',
    error: false
   });

  const isInputEmpty = () => {
    return Object.values(state).some((value) => value.length === 0);
  }

  const loginUser = () => {
    if(isInputEmpty()) {
      return setState({ ...state, error: true });
    }
    // send apiCall
  }

  const renderButton = () => {
    return(
      <>
        <CustomButton
          text='ورود'
          variant='contained'
          color='secondary'
          textColor='white'  
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

export default connect(null, {
  setModal
})(LoginModal);
