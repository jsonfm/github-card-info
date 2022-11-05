import { Grid, Typography} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';


export const CardSkeleton = () => {

    return ( 
        <Grid
            container
            sx={{marginTop: "48px"}}
            spacing={2}
        >
            <Grid sm={4} xs={12} item>
                <Skeleton height="260px" variant="rectangular"/>
            </Grid>
            <Grid sm={8} xs={12} item spacing={4}>
                {/* <Typography variant="h4"></Typography> */}
                <Skeleton height="80px" variant="rectangular" sx={{marginBottom: "20px"}}/>
                <Skeleton height="160px" variant="rectangular"/>
 
            </Grid>
        </Grid>      
    )
}