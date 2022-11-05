import { useState, useEffect } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useAppContext } from "@/store/context";
import { UserService } from "@/services/user.service";
import { actionTypes } from "@/reducers";


const userService = new UserService();


export const SearchBar = () => {

    const [search, setSearch] = useState('');
    const { dispatch } = useAppContext();

    const stackStyles = {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto'
    }
    const textFieldStyles = {
        width: '90%',
        margin: '0 auto'
    }

    const fetchData = async (username) => {
        try{
            dispatch({ type: actionTypes.SET_LOADING, payload: true });
            const response = await userService.getUser(username || "octocat");
            console.log("response: ", response);
            if(!!response.message){
                dispatch({ type: actionTypes.SET_ERROR, payload: response.message });
            }else{
                dispatch({ type: actionTypes.SET_USER, payload: response });
            }

            dispatch({ type: actionTypes.SET_LOADING, payload: false });
        }catch(err){
            dispatch({ type: actionTypes.SET_ERROR, payload: err.message });
        }
    }

    const handleSubmit = async () => {
        fetchData(search)
    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Stack
            direction='row'
            sx={stackStyles}
        >
            <TextField
                id="outlined-basic"
                placeholder="Octocat"
                label="Github User"
                sx={textFieldStyles}
                onChange={onChange}
                InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={handleSubmit}
                      >
                        <SearchIcon />
                      </IconButton>
                    )
                }}
            />
        </Stack>
    )
}