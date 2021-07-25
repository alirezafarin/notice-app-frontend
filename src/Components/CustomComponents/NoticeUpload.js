import React, { useRef } from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import { domain } from 'globalVariables';

function NoticeUpload({ uploadImage=()=>{}, uploadedImage='', ...props }) {
  let uploadEl = useRef();

  const triggerUploadBtn = () =>{
    const uploadBtn = uploadEl;
    uploadBtn.click();
  }

  const uploadFile = () =>{
    const file = uploadEl.files[0];
    const formData = new FormData();
    formData.append('image', file);
    // send apiCall
    uploadImage(formData);
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
      <img src={domain + '/' + uploadedImage} alt='main image' />
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

export default NoticeUpload;