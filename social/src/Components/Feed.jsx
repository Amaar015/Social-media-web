import { Box,Typography,Card,CardActions,IconButton,Avatar,CardHeader,CardMedia,CardContent,
         Checkbox } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import post from '../image/post-3.webp'
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Feed() {
    return (
       <Box  flex={4} p={2} alignItems='center'>
        
        <Card >
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="5%"
        image={post}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
          
    </Card>
        
       </Box>
    );
  }
  
  export default Feed;
  