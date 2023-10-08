import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm({formData,handlechange}) {

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Your Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handlechange}
            value={formData.email}
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handlechange}
            value={formData.phone}
            required
            id="phone"
            name="phone"
            label="250"
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handlechange}
            value={formData.address1}
            required
            id="address1"
            name="address1"
            label="street Address 1"
            fullWidth
            autoComplete="client address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handlechange}
            value={formData.address2}
            id="address2"
            name="address2"
            label="street Address 2"
            fullWidth
            autoComplete="client address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handlechange}
            value={formData.city}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="client address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handlechange}
            value={formData.hood}
            id="hood"
            name="hood"
            label="hood-name"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}