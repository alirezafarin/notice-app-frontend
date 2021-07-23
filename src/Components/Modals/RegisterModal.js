import CustomButton from 'Components/MuiComponents/CustomButton';
import Input from 'Components/MuiComponents/Input';
import PasswordInput from 'Components/MuiComponents/PasswordInput';
import React, { useState } from 'react'

function RegisterModal() {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    rePass: '',
    error: false
  })

  const isInputEmpty = () => {
    return Object.values(state).some((value) => value.length === 0);
  }

  const registerUser = () => {
    if(isInputEmpty()) {
      return setState({ ...state, error: true });
    }
    // send apiCall
  }

  const renderButton = () => {
    return(
      <>
        <CustomButton
          text='ثبت نام'
          variant='contained'
          color='secondary'
          textColor='white'  
          onClick={() => registerUser()}
        />
      </>
    );
  }

	const returnContent = () => {
    return(
      <>
      <div className='login-modal-body'>
        <div className='input-label'>
          <span>نام:</span>
        </div>
        <Input
          fullWidth
          error={state.error && state.firstName.length === 0}
          errorText={(state.error && state.firstName.length === 0) ? 'این فیلد اجباری است' : ''}
          type='text'
          value={state.firstName}
          onChange={(e) => setState({ ...state, firstName: e.target.value })}
        />
        <div className='input-label'>
          <span>نام خانوادگی:</span>
        </div>
        <Input
          fullWidth
          error={state.error && state.lastName.length === 0}
          errorText={(state.error && state.lastName.length === 0) ? 'این فیلد اجباری است' : ''}
          type='text'
          value={state.lastName}
          onChange={(e) => setState({ ...state, lastName: e.target.value })}
        />
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
          fullWidth 
          error={state.error && state.password.length === 0}
          errorText={(state.error && state.password.length === 0) ? 'این فیلد اجباری است' : ''}
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <div className='input-label'>
          <span>تکرار رمز عبور :</span>
        </div>
        <PasswordInput
          fullWidth 
          error={state.error && state.rePass.length === 0}
          errorText={(state.error && state.rePass.length === 0) ? 'این فیلد اجباری است' : ''}
          value={state.rePass}
          onChange={(e) => setState({ ...state, rePass: e.target.value })}
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

export default RegisterModal;
