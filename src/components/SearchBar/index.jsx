import { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {
    const [search, setSearch] = useState('');

    const stackStyles = {
        width: '80%',
        margin: '0 auto'
    }
    const textFieldStyles = {
        width: '90%',
        margin: '0 auto'
    }

    const handleSubmit = () => {
        console.log("handle submit: ", search);
    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

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