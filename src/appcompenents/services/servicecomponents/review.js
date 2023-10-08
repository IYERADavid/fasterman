import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";


export default function Review({formData}){
    return(
        <>
            <Typography variant="h6" gutterBottom>
            service summary
            </Typography>
            <Grid container spacing={2} sx={{ my:2 }}>
              <Grid item xs={12} md={6}>
                <Typography>email : {formData.email}</Typography>
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography>phone : {formData.phone}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>address 1 : {formData.address1}</Typography>
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography>address 2 : {formData.address2}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>city : {formData.city}</Typography>
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography>hood : {formData.hood}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my:3 }}>
              <Grid item xs={12} md={6}>
                <Typography>serviceName : {formData.serviceName}</Typography>
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography>emergency : {formData.emergency}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>ServiceDescription : {formData.ServiceDescription}</Typography>
              </Grid>
              <Grid item xs={12} md={6} >
                <Typography>start time : {formData.starttime}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>end time : {formData.endtime}</Typography>
              </Grid>
              {formData.reply_msg ?
                (<Grid item xs={12}>
                  <Typography variant="h6" color="#aa647b">
                    reply_message: {formData.reply_msg}
                  </Typography>
                </Grid>)
              :(null)}
            </Grid>
        </>
    )
}