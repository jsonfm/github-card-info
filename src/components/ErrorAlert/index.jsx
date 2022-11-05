import { useState } from "react";
import { Snackbar, Alert } from '@mui/material';


export function ErrorAlert({ message } = {}) {
    const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
    {message && 
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
    }
    </div>
  );
}
