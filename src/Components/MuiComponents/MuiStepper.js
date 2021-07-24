import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomButton from './CustomButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    direction: 'ltr'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperRoot: {
    padding: '10px'
  },
  body: {
    direction: 'rtl',
    minHeight: '400px'
  },
  buttons: {
    direction: 'rtl',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flexStart',
    margin: 'auto'
  },
  editBtn: {
    backgroundColor: '#008e59',
    color: 'white',
    maxWidth: '500px',
    '&:hover': {
      opacity: '0.6',
      backgroundColor: '#008e59'
    }
  }
}));

function MuiStepper({ 
  steps=[],
  components=[],
  handleNext=()=>{},                                                            
  handleBack=()=>{},
  buttonLoading=false,
  handleFinish=()=>{},
  activeStep=0 }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper classes={{
        root: classes.stepperRoot
      }} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className='muiStepper-body'>
        <div>
          <div className={classes.body}>
            {components[activeStep]}
          </div>
          {activeStep !== steps.length ? 
            <div className={classes.buttons}>
              {activeStep !== steps.length - 1 ? 
                <div className='muiStepper-next-btn'>
                  <CustomButton
                    variant='contained'
                    color='secondary'
                    textColor='white'
                    text='مرحله بعد'  
                    // icon='next'
                    onClick={handleNext}
                    loading={buttonLoading}
                  />
                </div>
                :
                <div>
                  <CustomButton
                    variant='contained'
                    // fullWidth  
                    text='ثبت نهایی'
                    color='secondary'
                    className={classes.editBtn}
                    onClick={handleFinish}
                    disabled={buttonLoading}
                  />
                </div>
                }
                {activeStep !== 0 ? 
                <div className='muiStepper-back-btn'>
                  <CustomButton
                    variant='outlined'
                    color='primary'
                    text='مرحله قبل'  
                    icon='before'
                    ltr
                    onClick={handleBack}
                  />
                </div>
                : 
                null}
            </div>
            :
            null 
          }
        </div>
      </div>
    </div>
  );
}

export default MuiStepper;