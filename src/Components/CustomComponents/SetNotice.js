import NoticeMainInfo from 'Components/CustomComponents/NoticeMainInfo';
import MuiStepper from 'Components/MuiComponents/MuiStepper';
import React from 'react'
import NoticeAddress from 'Components/CustomComponents/NoticeAddress';
import NoticeUpload from 'Components/CustomComponents/NoticeUpload';
import history from 'history/history';
import { apiCall } from 'Components/axiosSettings';
import { setAlert, setLoading } from 'redux/actions';
import { connect } from 'react-redux';

function SetNotice({
  noticeName='',
  noticeDescription='',
  noticeAddress='',
  noticePhoneNumber='',
  noticeId='',
  noticeLocation=[35.807294698537746, 51.428815126419074],
  noticeUploadedImage='',
  noticeApiCall=()=>{},
  ...props
 }) {

  const [state, setState] =
    React.useState({
    name: noticeName,
    description: noticeDescription,
    address: noticeAddress,
    phoneNumber: noticePhoneNumber
  }); 
  const [error, setError] =  React.useState(false); 
  const [location, setLocation] =  React.useState(noticeLocation);
  const [uploadedImage, setUploadedImage] =  React.useState(noticeUploadedImage);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['اطلاعات اصلی', 'ثبت آدرس', 'آپلود عکس'];

  const handleFinish = () => {
    history.push(`/notice/${noticeId}`);
  }

  const uploadImageApiCall = (formData) => {
    apiCall({
      url: `/notice/uploadImage/${noticeId}`,
      method: 'post',
      body: formData,
      header: {
        'Accept': 'multipart/form-data'
      },
      token: true,
      loading: 'createNotice',
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }
      setUploadedImage(res.data.result.imageName);
      props.setAlert(true, 'عکس با موفقیت آپلود شد', 'success');
    })
  }

  const areInputsEmpty = () => {
    let { name, description, phoneNumber } = state;
    return Object.values({ name, description, phoneNumber }).some((value) => value.length === 0);
  }

  const handleNext = () => {

    if(areInputsEmpty()) {
      return setError(true);
    }

    if( activeStep === 1 ) {
      noticeApiCall({ ...state, location})
      .then((res) => {
        if( !res ) {
          return;
        }
        console.log(res);
        console.log(noticeId, 'noticeId');
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      })
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onChange = (field, e) => {
    setState({ ...state, [field]: e.target.value });
  }

  return (
    <div id='create-notice'>
      <MuiStepper
        steps={steps}
        activeStep={activeStep}
        handleFinish={handleFinish}
        handleNext={handleNext}
        handleBack={handleBack}
        buttonLoading={props.loading}
        components=
        {[(<NoticeMainInfo
              state={state}
              onChange={onChange}
              error={error}
          />),
          (<NoticeAddress
             setLocation={setLocation}
             location={location}
             state={state}
             onChange={onChange}
             error={error}
          />),
          (<NoticeUpload
            uploadImage={uploadImageApiCall}
            noticeId={noticeId}
            uploadedImage={uploadedImage}
          />)
        ]}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading.createNotice
})

export default connect(mapStateToProps, {
  setAlert,
  setLoading
})(SetNotice);