import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import Notification from "./admincomponent/notifications";

const secrete_key = "arobaini na tisa"
const Admin = ()=>{
    const [pass, setPass] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const entered_key = data.get("secretekey");
        if (entered_key === secrete_key){
            setPass(true);
        }
    }

    return(
        <>
        <Container component="main" maxWidth="sm" sx={{ my: 5}}>
        {!pass ?(
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          autoComplete="given-secrete-key"
          name="secretekey"
          required
          fullWidth
          id="secrete"
          label="Secrete key"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          continue
        </Button>
        </Box>
        ) : (<Notification />)}
        </Container>
        </>
    )
}

export default Admin;