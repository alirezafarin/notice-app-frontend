import { red } from 'globalVariables/index';
import CustomButton from 'Components/MuiComponents/CustomButton';
import React from 'react'

export default function LogoutModal(props) {

  const renderButtons = () => {
    return(
        <div style={{ color: red }}>
          <CustomButton
            text='بله'
            onClick={() => props.logout()}
            color='inherit'
          />
          <CustomButton
            text='خیر'
            onClick={() => props.closeModal()}
            color='secondary'
          />
        </div>
    );
  }

  return (
    <div className='logout-modal-container'>
      <div className='logout-modal-msg'>
        <span>
          آیا میخواهید از پروفایلتان خارج شوید؟
        </span>
      </div>
      <div className='logout-modal-btns'>
        {renderButtons()}
      </div>
    </div>
  )
}
