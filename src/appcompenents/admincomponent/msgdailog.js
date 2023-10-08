import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Review from '../services/servicecomponents/review';
import update_status from './handleresponse';

export default function MsgDialog({openDailog,
    setOpenDailog, datas}) {
  const [replyMessage, setReplyMessage] = useState('');

  const handleClose = () => {
    setOpenDailog(false);
    setReplyMessage("");
  };
  const handleresponse = async(status)=>{
    const updated_doc = await update_status(
      datas.id, status, replyMessage);
    console.log(updated_doc);
    handleClose();
  }
  const formattedSendedTime =
    datas.sended_time && datas.sended_time.toDate()
      ? datas.sended_time.toDate().toLocaleString()
      : '';

  return (
    <div>
      <Dialog
        open={openDailog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            recently updated :
            {formattedSendedTime}
        </DialogTitle>
        <DialogContent>
            <Review formData={datas} />
            <TextField
            autoComplete="given-reply"
            name="rep-message"
            required
            fullWidth
            id="rep-message"
            label="Reply message"
            autoFocus
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> handleresponse("ACCEPTED")}
          variant="outlined" color="success" >
            ACCEPT
          </Button>
          <Button onClick={()=> handleresponse("DECLINED")} 
          variant="outlined" color="error" >
            DECLINE
          </Button>
          <Button onClick={handleClose} autoFocus variant="contained" >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
