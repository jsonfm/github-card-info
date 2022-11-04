import { SearchBar } from "@/components/SearchBar";
import { Box, Grid, Typography} from "@mui/material";
import { Image } from 'mui-image';


export const Card = ({user}) => {
    if(!user){
        return null;
    }

    const {
        avatar_url,
        name,
        bio
    } = user;

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
        <Grid
          container
          sx={{marginTop: "32px"}}
          spacing={2}
        >
          <Grid sm={4} xs={12} item>
              <Image
                height="300px"
                src={avatar_url}
              />
          </Grid>
          <Grid sm={8} xs={12} item>
            <Typography variant="h4">{name}</Typography>
            <Typography>
                {bio ? bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat, rem nobis odit atque a aspernatur nihil iure ducimus voluptatum quas ipsa veniam suscipit officiis enim similique incidunt deserunt facilis!"} 
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
}