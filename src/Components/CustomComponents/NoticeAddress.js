import React from 'react'
import ReactMap from 'Components/CustomComponents/ReactMap';
import Marker from 'icons/marker-icon.png';
import Input from 'Components/MuiComponents/Input';

function NoticeAddress({ setLocation=()=>{}, location=[],  }) {

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
          type='number'
          // value={state.phoneNumber}
          // onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
        />
      </div>
    </div>
  )
}

export default NoticeAddress;