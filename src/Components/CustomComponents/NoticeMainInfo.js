import React from 'react'
import Input from 'Components/MuiComponents/Input';

function NoticeMainInfo({ state={}, onChange=()=>{}, error=false }) {
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
              error={error && state.name.length===0}
              errorText={error && state.name.length===0 ? "این فیلد اجباری است" : ''}
              value={state.name}
              onChange={(e) => onChange('name', e)}
            />
          </div>
          <div>
            <div className='input-label'>
              <span>شماره تلفن:</span>
            </div>
            <Input
              fullWidth
              type='number'
              error={error && state.phoneNumber.length===0}
              errorText={error && state.phoneNumber.length===0 ? "این فیلد اجباری است" : ''}
              value={state.phoneNumber}
              onChange={(e) => onChange('phoneNumber', e)}
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
              type='text'
              error={error && state.description.length===0}
              errorText={error && state.description.length===0 ? "این فیلد اجباری است" : ''}
              value={state.description}
              onChange={(e) => onChange('description', e)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeMainInfo;