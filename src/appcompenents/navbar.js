import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Userdata from './navbarcomp/userdata';

const Navbar = ({user_id}) => {
  const [lastname, setLastname] = useState(null);

  useEffect(()=>{
    const fetchdata = async()=>{
        const user_data = await Userdata(user_id);
        setLastname(user_data.lastname)
    }
    fetchdata();
    
  }, [user_id])

  const isMobile = useMediaQuery('(max-width:600px)');
  const style = {
    backgroundColor: '#4db6ac',
    '@media (min-width:730px) and (max-width:960px)': {
        marginLeft: '14px',
        marginRight: '14px'
    },
    '@media (min-width:960px)and (max-width:1280px)': {
        marginLeft: '24px',
        marginRight: '24px'
    },
    '@media (min-width:1280px)': {
        marginLeft: '34px',
        marginRight: '34px'
    }
 };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {"Welcome "}{lastname}
        </Typography>
        {isMobile ? (
          <div style={{ flexGrow: 1 }} />
        ) : (
          <>
          <div style={{ flexGrow: 1 }} />
          <div>
            {/* Desktop navigation links/buttons */}
            <Button color="inherit" sx={style} href='/' >Home</Button>
            <Button color="inherit" sx={style} href='/request_service' >Request</Button>
            <Button color="inherit" sx={style} href='/login' >Login</Button>
            <Button color="inherit" sx={style} href='/signup' >Signup</Button>
            <Button color="inherit" sx={style} href='/logout' >Logout</Button>
          </div>
          </>
        )}
      </Toolbar>
      {isMobile && (
        <div>
          {/* Mobile navigation links/buttons */}
          <Button color="inherit" href='/' >Home</Button>
          <Button color="inherit" href='/request_service' >Request</Button>
          <Button color="inherit" href='/login' >Login</Button>
          <Button color="inherit" href='/signup' >Signup</Button>
          <Button color="inherit" href='/logout' >Logout</Button>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
