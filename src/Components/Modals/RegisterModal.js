import { apiCall } from 'Components/axiosSettings';
import CustomButton from 'Components/MuiComponents/CustomButton';
import Input from 'Components/MuiComponents/Input';
import PasswordInput from 'Components/MuiComponents/PasswordInput';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setAlert, setLoading } from 'redux/actions';

function RegisterModal(props) {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    rePass: '',
    error: false,
    errorMsg: 'این فیلد اجباری است'
  })

  const areInputsEmpty = () => {
    return Object.values(state).some((value) => value.length === 0);
  }

  const arePassesEqual = () => {
    return state.password === state.rePass;
  }

  const registerUser = () => {
    if(areInputsEmpty()) {
      return setState({ ...state, error: true, errorMsg: 'این فیلد اجباری است' });
    }

    if(!arePassesEqual()) {
      return setState({ ...state, error: true, errorMsg: 'رمز عبور و تکرار آن مساوی نیستند' });
    }
    // send apiCall
    apiCall({
      url: '/user/signIn',
      method: 'post',
      body: {
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        password: state.password
      },
      loading: 'login',
      componentProps: props
    })()
    .then((res) => {
      console.log(res, 'res');
    })
    .catch((err) => console.log(err, 'err'))
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

  const hasErrro = (field) => {
    return (state.error && (state[field].length === 0 || (state.password !== state.rePass)));
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
          error={hasErrro('password')}
          errorText={(hasErrro('password')) ? state.errorMsg : ''}
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <div className='input-label'>
          <span>تکرار رمز عبور :</span>
        </div>
        <PasswordInput
          fullWidth 
          error={hasErrro('rePass')}
          errorText={(hasErrro('rePass')) ? state.errorMsg : ''}
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

const mapStateToProps = (state) => ({
  loading: state.loading.login  
})

export default connect(mapStateToProps, {
  setAlert,
  setLoading
})(RegisterModal);
