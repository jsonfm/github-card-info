import { useState } from "react";
import { Snackbar, Alert, Typography } from '@mui/material';
import { useAppContext } from "@/store/context";
import { actionTypes } from "@/reducers";


export function ErrorAlert() {
    const { state, dispatch } = useAppContext();

    const { error } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({ type: actionTypes.SET_ERROR, payload: undefined });
    };

  return (
    <>
        <Snackbar  open={!!error} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'bottom', horizontal: 'left' }}>
            <Alert sx={{display: 'flex', alignItems: 'center'}} onClose={handleClose} variant="filled"  severity="error" color="error">
                <Typography variant="h6">
                    {error}
                </Typography>
            </Alert>
        </Snackbar>
    </>
  );
}
