import { SearchBar } from "@/components/SearchBar";
import { Box } from "@mui/material";
import { CardData } from "@/components/CardData";
import { ErrorAlert } from '@/components/ErrorAlert';
import { useAppContext } from "@/store/context";
import { CardSkeleton } from "@/skeletons/CardSkeleton";

export const Card = () => {
    const { state } = useAppContext();
    const { loading } = state;

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
        {!!loading ? <CardSkeleton /> : <CardData />}
        <ErrorAlert />
      </Box>
    )
}