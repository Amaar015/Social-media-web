import React from 'react'
import { Typography,Card,CardActions,IconButton,Avatar,CardHeader,CardMedia,CardContent,
    Checkbox } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import post from '../image/post-3.webp'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import user from '../image/user.png'


const Post = () => {
  return (
            
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar src={user}  aria-label="recipe">
          
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
  )
}

export default Post




const chatData = [
  {

    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvUt5pFtC_O89k0CTTd1b7tc1IAvC1q65rhaD0cGbEpiuvYRBFzbdvJcImfmZ3WKtXcY&usqp=CAU',
    title: 'Bare Log',
    description:' Do you have Paris recommendations? Have you ever…',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78jyDzsusFtTrdpkR0NQb8G4uRSGnzZ3MSQ&usqp=CAU',
    title: 'Amaar',
    description:' Do you have Paris recommendations? Have you ever…',
  },
  {
     img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F2002403-man-with-beard-avatar-character-isolated-icon&psig=AOvVaw3VMSL1UFD0WcQVpMNv52HE&ust=1699987792682000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCm4uOmwYIDFQAAAAAdAAAAABAE',
    title: 'Kashif Ali',
    description:' Do you have Paris recommendations? Have you ever…',
  },
  {
    img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-agvlo&psig=AOvVaw3VMSL1UFD0WcQVpMNv52HE&ust=1699987792682000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCm4uOmwYIDFQAAAAAdAAAAABAJ',
     title: 'Khazina',
    description:' Do you have Paris recommendations? Have you ever…',
  }
];