import { Grid, Typography} from "@mui/material";
import { Image } from 'mui-image';
import { ErrorAlert } from '@/components/ErrorAlert';


export const CardData = ({ user }) => {

    if(!user){
        return null;
    }

    const {
        avatar_url,
        name,
        bio,
        public_repos,
        followers,
        following,
    } = user;

    return (
        
        <Grid
            container
            sx={{marginTop: "48px"}}
            spacing={2}
        >
        <Grid sm={4} xs={12} item>
            <Image
              height="300px"
              src={avatar_url}
            />
        </Grid>
        <Grid sm={8} xs={12} item >
          <Typography variant="h4">{name}</Typography>
          <Typography textAlign="justify">
              {bio ? bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat, rem nobis odit atque a aspernatur nihil iure ducimus voluptatum quas ipsa veniam suscipit officiis enim similique incidunt deserunt facilis!"} 
          </Typography>
          <Grid
              sx={{margin: "32px auto", maxWidth: "400px"}}
              container
              justifyContent="center"

          >
              <Grid
                  item
                  textAlign="center"
                  xs={4} md={3}
              >
                  <Typography variant="h5" >{public_repos ?? `-`}</Typography>
                  <Typography variant="h6"><b>Repos</b></Typography>
              </Grid>
              <Grid
                  item
                  textAlign="center"
                  xs={4} md={3}
              >
                  <Typography variant="h5" >{followers}</Typography>
                  <Typography variant="h6"><b>Follwers</b></Typography>
              </Grid>
              <Grid
                  item
                  textAlign="center"
                  xs={4} md={3}
              >
                  <Typography variant="h5" >{following}</Typography>
                  <Typography variant="h6"><b>Following</b></Typography>
              </Grid>
          </Grid>
        </Grid>

        <ErrorAlert />

        </Grid>      
    )
}