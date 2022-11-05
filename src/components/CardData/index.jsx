import { Grid, Typography, Paper } from "@mui/material";
import { Image } from 'mui-image';
import { useAppContext } from '@/store/context';

export const CardData = () => {
    const { state } = useAppContext();
    const { user } = state;

    if(!user){
        return null;
    }

    const {
        avatar_url,
        name,
        bio,
        public_repos = "-",
        followers,
        following,
    } = user;

    return ( 
        <Grid
            container
            sx={{marginTop: "32px", marginBottom: "5rem"}}
            spacing={4}
        >
            <Grid sm={4} xs={12} item>
                <Image
                    height="260px"
                    src={avatar_url}
                />
            </Grid>
            <Grid sm={8} xs={12} item >
                <Typography variant="h5" sx={{marginBottom: "12px"}}>{name}</Typography>
                <Typography textAlign="justify" width="100%">
                    {bio ? bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat, rem nobis odit atque a aspernatur nihil iure ducimus voluptatum quas ipsa veniam suscipit officiis enim similique incidunt deserunt facilis!"} 
                </Typography>
                <Paper  elevation={2} sx={{marginTop: "16px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Grid
                        sx={{margin: "16px auto", maxWidth: "700px", border: "", padding: "0 2rem"}}
                        container
                        justifyContent="space-between"
                    >
                        <Grid
                            item
                            textAlign="center"
                            xs={4} md={3}
                        >
                            <Typography variant="h5" >{public_repos}</Typography>
                            <Typography variant="p"><b>Repos</b></Typography>
                        </Grid>
                        <Grid
                            item
                            textAlign="center"
                            xs={4} md={3}
                        >
                            <Typography variant="h5" >{followers}</Typography>
                            <Typography variant="p"><b>Follwers</b></Typography>
                        </Grid>
                        <Grid
                            item
                            textAlign="center"
                            xs={4} md={3}
                        >
                            <Typography variant="h5" >{following}</Typography>
                            <Typography variant="p"><b>Following</b></Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>      
    )
}