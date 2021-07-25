import { red } from 'globalVariables/index';
import CustomButton from 'Components/MuiComponents/CustomButton';
import React from 'react'
import { connect } from 'react-redux'

function DeleteModal(props) {

  const renderButtons = () => {
    return(
        <div style={{ color: red }}>
          <CustomButton
            text='بله'
            onClick={() => props.delete()}
            color='inherit'
            loading={props.loading}
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
          آیا از انجام این کار مطمئن هستید ؟
        </span>
      </div>
      <div className='logout-modal-btns'>
        {renderButtons()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading.deleteNotice  
})

export default connect(mapStateToProps)(DeleteModal);