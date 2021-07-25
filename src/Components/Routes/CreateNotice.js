import React from 'react'
import { apiCall } from 'Components/axiosSettings';
import { setAlert, setLoading } from 'redux/actions';
import { connect } from 'react-redux';
import SetNotice from 'Components/CustomComponents/SetNotice';

function CreateNotice({ ...props }) {

  const [id, setId] =  React.useState(''); 

  const createNoticeApiCall = (body) => {
    return apiCall({
      method: 'post',
      url: '/createNotice',
      body,
      token: true,
      loading: 'createNotice',
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }
      props.setAlert(true, 'آگهی شما با موقیت ایجاد شد', 'success');
      setId(res.data.result.id);
      return res;
    })
  }

  return (
    <SetNotice
      noticeApiCall={createNoticeApiCall}
      noticeId={id}
    />
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading.createNotice
})

export default connect(mapStateToProps, {
  setAlert,
  setLoading
})(CreateNotice);