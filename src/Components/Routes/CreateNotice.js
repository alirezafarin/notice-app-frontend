import NoticeMainInfo from 'Components/CustomComponents/NoticeMainInfo';
import MuiStepper from 'Components/MuiComponents/MuiStepper';
import React from 'react'
import NoticeAddress from 'Components/CustomComponents/NoticeAddress';
import NoticeUpload from 'Components/CustomComponents/NoticeUpload';

function CreateNotice() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [location, setLocation] =  React.useState([35.807294698537746, 51.428815126419074]);
  const steps = ['اطلاعات اصلی', 'ثبت آدرس', 'آپلود عکس'];

  const handleFinish = () => {
    console.log('finish')
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div id='create-notice'>
      <MuiStepper
        steps={steps}
        activeStep={activeStep}
        handleFinish={handleFinish}
        handleNext={handleNext}
        handleBack={handleBack}
        buttonLoading={false}
        components=
        {[(<NoticeMainInfo />),
          (<NoticeAddress
             setLocation={setLocation}
             location={location}
          />),
          (<NoticeUpload />)
        ]}
      />
    </div>
  )
}

export default CreateNotice;