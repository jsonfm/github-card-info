import { Container, Typography } from '@mui/material';

export const Footer = () => {
    const footerStyles = {
        clear: "both",
        position: "relative",
        height: "4rem   "
    }
    return(
        <Container sx={footerStyles}>
            <Typography variant="h6">All right reserved.</Typography>
        </Container>
    )
}