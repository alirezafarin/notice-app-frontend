import React, { useRef } from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import { connect } from 'react-redux'
import { setAlert, setLoading } from 'redux/actions';
import { apiCall } from 'Components/axiosSettings';

function NoticeUpload({ uploadedImage='', ...props }) {
  let uploadEl = useRef();

  const triggerUploadBtn = () =>{
    const uploadBtn = uploadEl;
    uploadBtn.click();
  }

  // 

  const uploadFile = () =>{
    const file = uploadEl.files[0];
    const formData = new FormData();
    formData.append('image', file);

    // send apiCall
    apiCall({
      url: '/notice/uploadImage/60fa72da29d5c53fff33dbe5',
      method: 'post',
      body: formData,
      header: {
        'Accept': 'multipart/form-data'
      },
      token: true,
      loading: 'login',
      componentProps: props
    })()
    .then((res) => {
      if( !res ) {
        return;
      }})

    // const reader = new FileReader();
    // reader.addEventListener("load",() => {
    //   let base64 = reader.result.split("base64,");
    //   console.log(base64, 'base64')
    //   console.log(file.type.split('/')[1], 'extention');
    // }, false);
    // if (file) {
    //   if(file.type.search('image')===-1){
    //     props.setAlert(true, 'فرمت فایل قابل پشتیبانی نیست', 'error');
    //   }
    //   else{
    //     // console.log(file.type.split('/')[1], 'extention');
    //     reader.readAsDataURL(file);
    //   }
    //   }
  }

  const renderImage = () => {
    if(uploadedImage === '') {
      return(
        <>
          <PublishIcon fontSize='large' />
          <div>
            برای آپلود عکس کلیک کنید
          </div>
        </>
      )
    }

    return(
      // <img src={} alt='main image' />
      null
    );
  }

  return (
    <div className='notice-upload'>
      <div onClick={() => triggerUploadBtn()} className='edit-service-editFields-image-item'>
        {renderImage()}
      </div>
      <input
        ref={(reference)=>{uploadEl=reference}} 
        type="file"
        accept="image/*"
        multiple={false}
        style={{display:'none'}}
        onChange={() => uploadFile()}
      />

    </div>
  )
}

export default connect(null, {
  setAlert,
  setLoading,
})(NoticeUpload);