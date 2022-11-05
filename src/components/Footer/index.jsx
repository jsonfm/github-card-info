import { Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
export const Footer = () => {
    const footerStyles = {
        clear: "both",
        position: "relative",
        height: "4rem   "
    }
    return(
        <Container sx={footerStyles}>
            <Stack
                direction="row"
                justifyContent="center"
                spacing={1}
            >
                <Typography variant="h6">Made by <b>jsonfm</b>.</Typography>
                <Link href="https://github.com/jsonfm/github-card-info" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon/>
                </Link>
            </Stack>
        </Container>
    )
}