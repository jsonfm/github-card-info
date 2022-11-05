import { useState } from "react";
import { Snackbar, Alert } from '@mui/material';
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
        <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>
    </>
  );
}
