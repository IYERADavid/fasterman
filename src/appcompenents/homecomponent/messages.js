import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CancelIcon from '@mui/icons-material/Cancel';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Retrievemsg from './retrivemsg';
import MsgDialog from './msgdailog';
import { Typography } from '@mui/material';

const colors = (status)=>{
  if(status === "ACCEPTED"){
    return "green";
  }else if(status === "DECLINED"){
    return "red";
  }else{
    return "orange";
  }
}

export default function Messages({user_id}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchdata = async()=>{
        const msg_list = await Retrievemsg(user_id);
        setData(msg_list);
        setLoading(false);
    }
    fetchdata();
    
  }, [user_id])

  const handleListItemClick = (
    event,
    index
  ) => {
    setSelectedIndex(index);
    setOpenDailog(true);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ my: 5 }}>
    <Typography component="h1" variant="h4" 
    align="center" sx={{my:3}}>
       your delivered requests
    </Typography>
    <Box sx={{ width: '100%', bgcolor: 'background.paper',
    maxHeight: "80vh",overflow: 'auto',position: 'relative' }}>
      {loading ? (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
      <>
      <List component="nav" aria-label="main mailbox folders">
        { data.length !== 0 ? ( data.map( (doc, index) => (
            <ListItemButton
            key={doc.id}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText>{doc.serviceName}</ListItemText>
            <ListItemIcon sx={{ color: colors(doc.status)}}>
            {doc.status === "ACCEPTED" ? <CheckCircleIcon />:
            doc.status === "DECLINED" ? <CancelIcon />:
            <DoDisturbOnIcon />}
            {doc.status}
            </ListItemIcon>
            </ListItemButton>
        )))
        : (
        <>
        <div>No sent request available.</div>
        <p>check your network and try again</p>
        <p>or you haven't sent any request yet</p>
        </>)
        }
      </List>
      { data.length !== 0 &&
      <MsgDialog openDailog={openDailog} setOpenDailog={setOpenDailog}
      datas={data[selectedIndex]} />}
      </>
      )}
    </Box>
    </Container>
  );
}