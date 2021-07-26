import { Divider } from '@material-ui/core'
import { domain, markerInitialPosition, red } from 'globalVariables'
import { convertToJalali, returnImage } from 'globalVariables/helperFunctions'
import React from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from '@material-ui/core';
import Marker from 'icons/marker-icon.png';
import ReactMap from './ReactMap'
import CustomButton from 'Components/MuiComponents/CustomButton';
import history from 'history/history';
import { setModal, setLoading, setAlert } from 'redux/actions'
import DeleteModal from 'Components/Modals/DeleteNotice'
import { apiCall } from 'Components/axiosSettings'

function NoticeDetails({ notice= {}, ...props }) {

  const matches = useMediaQuery('(max-width:700px)');

  const returnDate = (date) => {
    let dateArr = date.split('-');
    let jalaliDate = convertToJalali([dateArr[0], dateArr[1], dateArr[2].slice(0, 2)]);
    return jalaliDate;
  }

  let jalaliDate = returnDate(notice.createdAt);

  const renderMap = (notice) => {
    return(
      <div className='notice-details-map'>
        <ReactMap 
          getLocation = {() => {}} 
          legend = {Marker} 
          legendSize={[38,58]}
          markerPosition = {notice.location.length === 0 ? markerInitialPosition : notice.location}
          markerInitialPosition = {notice.location.length === 0 ? markerInitialPosition : notice.location}
          markerMessage = {<p>موقعیت شما</p>}
        />
        <div>
          <span className='notice-details-info-address-title'>آدرس:</span>
          {notice.address}
        </div>
      </div>
    );
  }

  const renderButtons = () => {

    if(!notice.editable) {
      return;
    }

    return(
      <div className='notice-details-buttons'>
        <CustomButton
          icon='edit'
          text='ویرایش'
          color='secondary'
          variant='outlined'
          onClick={() => history.push('/editNotice/' + notice._id)}
        />
        <div style={{ color: red }}>
          <CustomButton
            icon='delete'
            text='حذف'
            color='inherit'
            variant='outlined'
            onClick={() => props.setModal(true, 'حذف آگهی',
             <DeleteModal
              delete={() => deleteNoticeApi()}
              closeModal={() => props.setModal(false)}
             />)}
          />
        </div>
      </div>
    );
  }

  const deleteNoticeApi = () => {
    apiCall({
      url: `/deleteNotice/${notice._id}`,
      method: 'delete',
      loading: 'deleteNotice',
      token: true,
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }
      props.setAlert(true, 'آگهی با موفقیت حذف شد', 'success');
      props.setModal(false);
      history.push('/');
    })
  }

  return (
    <>
      {!matches && renderButtons()}
      <div id='notice-details'>
        <div className='notice-details-info'>
          <div className='notice-details-info-name'>
            {notice.name}
          </div>
          <div className='notice-details-info-description'>
            {notice.description}
          </div>
          <Divider />
          <div className='notice-details-info-phoneNumber'>
            <div className='notice-details-info-phoneNumber-title'>
              شماره تماس:
            </div>
            <div>
              {notice.phoneNumber}
            </div>
          </div>
          <div className='notice-details-info-phoneNumber'>
            <div className='notice-details-info-phoneNumber-title'>
              تاریخ:
            </div>
            <div>
              {`${jalaliDate[0]}/${jalaliDate[1]}/${jalaliDate[2]}`}
            </div>
          </div>
        </div>
        <div className='notice-details-images'>
          <div className='notice-details-image-container'>
            <img src={returnImage(notice.imageName)} alt='' />
          </div>
          {!matches && renderMap(notice)}
        </div>
        {matches && renderMap(notice)}
      </div>
      {matches && renderButtons()}
    </>
  )
}

export default connect(null, {
  setModal,
  setLoading,
  setAlert
})(NoticeDetails);