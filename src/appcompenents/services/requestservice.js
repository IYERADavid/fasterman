import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Copyright from '../copyright';
import AddressForm from './servicecomponents/address';
import ServiceForm from './servicecomponents/service';
import Review from './servicecomponents/review';
import Add_msg from './handlesubmit'


const steps = ['Client address', 'Service details', 'Review your order'];


export default function RequestService({user_id}) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    ServiceDescription:"",address1:"",address2:"",
    city:"",email:"",emergency:"",endtime:"",
    hood:"",phone:"",serviceName:"",starttime:""
  });

  function handlechange(event){
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formData={formData} handlechange={handlechange}/>;
      case 1:
        return <ServiceForm formData={formData} handlechange={handlechange}/>;
      case 2:
        return <Review formData={formData}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = async() => {
    if(activeStep === 2){
      const new_msg = await Add_msg(formData, user_id);
      console.log(new_msg);
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Request Service
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your Request.
              </Typography>
              <Typography variant="subtitle1">
                We have sent your requested service
                and we will send you an update when your request has
                been accepted or declined.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
        <Copyright sx={{ my: 2 }} />
      </Container>
    </>
  );
}