import React from 'react'
import ReactMap from 'Components/CustomComponents/ReactMap';
import Marker from 'icons/marker-icon.png';
import Input from 'Components/MuiComponents/Input';

function NoticeAddress({ setLocation=()=>{}, location=[], state={}, onChange=()=>{}, error=false }) {

  const markerInitialPosition = [35.807294698537746, 51.428815126419074];

  return (
    <div>
      <ReactMap 
        getLocation = {(ltlg)=>setLocation([ltlg.lat,ltlg.lng])} 
        legend = {Marker} 
        legendSize={[38,58]}
        markerPosition = {location}
        markerInitialPosition = {markerInitialPosition}
        markerMessage = {<p>موقعیت شما</p>}
      />
      <div className='notice-address-field'>
        <div className='input-label'>
          <span>آدرس:</span>
        </div>
        <Input
          fullWidth
          multiline
          type='text'
          // error={error && state.address.length===0}
          // errorText={error && state.address.length===0 ? "این فیلد اجباری است" : ''}
          value={state.address}
          onChange={(e) => onChange('address', e)}
        />
      </div>
    </div>
  )
}

export default NoticeAddress;