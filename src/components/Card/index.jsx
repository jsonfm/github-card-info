import { SearchBar } from "@/components/SearchBar";
import { Box } from "@mui/material";
import { useAppContext } from '@/store/context';
import { CardData } from "@/components/CardData";
import { ErrorAlert } from '@/components/ErrorAlert';


export const Card = () => {

    const { state } = useAppContext();
    const { user } = state;

    const boxStyles = {
        width: '100%',
        minHeight: '400px',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    
    return (
    <Box
        sx={boxStyles}
      >
        <SearchBar />
        <CardData user={user}/>
        <ErrorAlert />
      </Box>
    )
}