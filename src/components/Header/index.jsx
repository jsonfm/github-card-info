import { Container, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const Header = () => {
    return(
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:"6rem"
            }}
            
        >
            <Typography variant="h5"><b>{`<DevSearcher />`}</b></Typography>
            <Brightness4Icon
                sx={{
                    cursor: 'pointer',
                }}
            />
        </Container>
    )
}