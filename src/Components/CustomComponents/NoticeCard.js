import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react'
import logo from 'icons/megaphone.png';

export default function NoticeCard() {
  return (
    <>
    <div className='notice-card-item'>
      <div className='notice-card-item-img'>
        <img src={logo} alt='' />
      </div>
      <div className='notice-card-item-details'>
        <div className='notice-card-item-details-name'>
          {/* {`${service.type.name} ${service.name}`} */}
          fdsfjl; dfj sjdfdsfjl; dfj sjdfdsfjl; dfj sjdfdsfjl; dfj sjdfdsfjl; dfj sjd
        </div>
        <div className='notice-card-item-details-desc'>
          {/* {service.intorduction} */}
          jdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafdjdlil;dsafd
        </div>
        <div className='notice-card-item-details-edit'>
          <CustomButton
            variant='outlined'
            color='secondary'
            text='مشاهده '  
            icon='next'
            // onClick={() => history.push(`/servicePage/${service.serviceId}/${service.stationId}`)}
          />
        </div>
      </div>
    </div>
    </>
  )
}
