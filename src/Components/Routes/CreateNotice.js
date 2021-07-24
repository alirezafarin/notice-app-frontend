import MuiStepper from 'Components/MuiComponents/MuiStepper';
import { darkBlue, lightBlue } from 'globalVariables';
import React from 'react'

function CreateNotice() {

  const [activeStep, setActiveStep] = React.useState(0);
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
        {[(<div>one</div>),
          (<div>two</div>),
          (<div>three</div>)
        ]}
      />
    </div>
  )
}

export default CreateNotice;