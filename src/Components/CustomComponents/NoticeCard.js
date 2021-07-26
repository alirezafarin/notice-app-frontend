import CustomButton from 'Components/MuiComponents/CustomButton'
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { domain } from 'globalVariables';
import { useMediaQuery } from '@material-ui/core';
import history from 'history/history';
import { Link } from 'react-router-dom';
import { returnImage } from 'globalVariables/helperFunctions';

export default function NoticeCard({ notice={}, ...props }) {

  const matches = useMediaQuery('(min-width: 1000px)')

  const returnCardContent = () => {
    return(
      <>
        <div className='notice-card-item-img'>
          <img src={returnImage(notice.imageName)} alt='' />
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
          {(matches) &&
            <div className='notice-card-item-details-click'>
              <CustomButton
                variant='outlined'
                color='secondary'
                text='مشاهده '  
                icon='next'
                onClick={() => history.push(`/notice/${notice._id}`)}
              />
            </div>
          }
        </div>
      </>
    );
  }

  return (
    <>
    {matches ? 
      <div className='notice-card-item'>
        {returnCardContent()}
      </div> :
      <Link to={`/notice/${notice._id}`} className='notice-card-item'>
        {returnCardContent()}
      </Link> 
      }
    </>
  )
}
