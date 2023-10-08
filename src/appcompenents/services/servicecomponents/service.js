import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function PaymentForm({formData,handlechange}) {

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Service Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handlechange}
            value={formData.serviceName}
            id="serviceName"
            label="name of service"
            name="serviceName"
            fullWidth
            autoComplete="name-service"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel label="More Emergency"
            control={<Checkbox onChange={handlechange}
                value={formData.emergency}
                color="secondary" name="emergency" />}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={handlechange}
            value={formData.ServiceDescription}
            id="ServiceDescription"
            name="ServiceDescription"
            label="service description"
            fullWidth
            autoComplete="service-descpt"
            variant="outlined"
            multiline={true}
            minRows={2}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handlechange}
            value={formData.starttime}
            id="start-time"
            name="starttime"
            type="datetime-local"
            helperText="starting time"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handlechange}
            value={formData.endtime}
            id="end-time"
            name="endtime"
            type="datetime-local"
            helperText="ending time"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
}