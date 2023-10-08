import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Review from '../services/servicecomponents/review';

export default function MsgDialog({openDailog,
    setOpenDailog, datas}) {

  const handleClose = () => {
    setOpenDailog(false);
  };

  return (
    <div>
      <Dialog
        open={openDailog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Recently updated :
            {datas.sended_time.toDate().toLocaleString()}
        </DialogTitle>
        <DialogContent>
            <Review formData={datas} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
