import { Container } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const Header = () => {
    return(
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <p>Logo</p>
            <Brightness4Icon
                sx={{
                    cursor: 'pointer',
                }}
            />
        </Container>
    )
}