import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react'
import logo from 'icons/megaphone.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { domain, imageDomain } from 'globalVariables';

export default function NoticeCard({ notice={}, ...props }) {
  return (
    <>
    <div className='notice-card-item'>
      <div className='notice-card-item-img'>
        <img src={domain + '/' + notice.imageName} alt='' />
      </div>
      <div className='notice-card-item-details'>
        <div className='notice-card-item-details-name'>
          {notice.name}
        </div>
        <div className='notice-card-item-details-desc'>
          {notice.description}
        </div>
        <div className='notice-card-item-details-location'>
          <div>
            <LocationOnIcon fontSize='small' />
          </div>
          <div>
            {notice.address}
          </div>
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
