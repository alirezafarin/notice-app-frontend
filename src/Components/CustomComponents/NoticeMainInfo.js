import React from 'react'
import Input from 'Components/MuiComponents/Input';

function NoticeMainInfo() {
  return (
    <div id='notice-mainInfo'>
      <div className='notice-mainInfo-fields-container'>
        <div className='notice-mainInfo-fields-container-firstRow'>
          <div>
            <div className='input-label'>
              <span> نام آگهی:</span>
            </div>
            <Input
              fullWidth
              type='text'
              // value={state.phoneNumber}
              // onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
            />
          </div>
          <div>
            <div className='input-label'>
              <span>شماره تلفن:</span>
            </div>
            <Input
              fullWidth
              type='number'
              // value={state.phoneNumber}
              // onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
            />
          </div>
        </div>
        <div className='notice-mainInfo-fields-container-secondRow'>
          <div>
            <div className='input-label'>
              <span>توضیحات:</span>
            </div>
            <Input
              fullWidth
              multiline
              type='number'
              // value={state.phoneNumber}
              // onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeMainInfo;