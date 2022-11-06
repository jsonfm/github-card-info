import { Container, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useThemeContext } from "@/theme/context";


export const Header = () => {
    const colorMode = useThemeContext();

    return(
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:"6rem"
            }}
            
        >
            <Typography sx={{color: "#ED6C03"}} variant="h5"><b>{`<DevSearcher />`}</b></Typography>
            <Brightness4Icon
                sx={{
                    cursor: 'pointer',
                }}
                onClick={colorMode.toggleColorMode} color="inherit"
            />
        </Container>
    )
}