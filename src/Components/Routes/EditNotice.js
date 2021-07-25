import React from 'react'
import { apiCall } from 'Components/axiosSettings';
import { getNoticeById, setAlert, setLoading } from 'redux/actions';
import { connect } from 'react-redux';
import SetNotice from 'Components/CustomComponents/SetNotice';
import Spinner from 'Components/CustomComponents/Spinner';

function EditNotice({ ...props }) {

  const id = props.params.id; 

  React.useEffect(() => {
    props.getNoticeById(id);
  }, [id])

  const editNoticeApiCall = (body) => {
    return apiCall({
      method: 'patch',
      url: `/notice/${id}`,
      body,
      token: true,
      loading: 'createNotice',
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }
      props.setAlert(true, 'آگهی شما با موقیت ویرایش شد', 'success');
      // setId(res.data.result.id);
      return res;
    })
  }

  const notice = props.notice || {}; 

  return (
    <Spinner
      Component={
        <SetNotice
          noticeName={notice.name}
          noticeDescription={notice.description}
          noticeAddress={notice.address}
          noticePhoneNumber={notice.phoneNumber}
          noticeLocation={notice.location}
          noticeUploadedImage={notice.imageName}
          noticeApiCall={editNoticeApiCall}
          noticeId={id}
        />
      }
      isLoading={props.loading}
      data={props.notice}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading.createNotice,
  notice: state.notices.noticeDetails[ownProps.params.id]
})

export default connect(mapStateToProps, {
  setAlert,
  setLoading,
  getNoticeById
})(EditNotice);