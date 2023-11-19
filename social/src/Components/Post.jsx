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
        <>
    {PostData.map((post)=>(
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar src={post.userImg}  aria-label="recipe">
          
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={post.username}
      subheader={post.date}
    />
    <CardMedia
      component="img"
      height="5%"
      image={post.img}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {post.description}
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
  ))}
  </>
  )
}

export default Post




const PostData = [
  {
// 4
    userImg:"./image/user5.jpg",
    date:'September 14, 2016',
    username:"Bare Log",
    img: './image/post-1.jpeg',
    description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
  },
  {
// 3
    userImg:"./image/user-2.png",
    date:'September 14, 2016',
    username:"Amaar Raza",
    img: './image/post-3.webp',
    description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
  },
  {
// 2
    userImg:"./image/user7.jpg",
    date:'September 27, 2027',
    username:"Khazina Batool",
    img: './image/post-4.jpeg',
    description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
  },
  {
// 1
    userImg:"./image/user-4.png",
    date:'September 14, 2016',
    username:"Kashif Khoso",
    img: './image/post-9.jpeg',
    description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
  },
  {
    // 4
        userImg:"./image/user6.png",
        date:'September 14, 2016',
        username:"Aijaz Ali",
        img: './image/post-6.jpg',
        description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
      },
      {
    // 3
        userImg:"./image/user5.jpg",
        date:'September 14, 2016',
        username:"Bare Log",
        img: './image/post-7.jpg',
        description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
      },
      {
    // 2
        userImg:"./image/user9.png",
        date:'September 14, 2016',
        username:"Mahmood Abassi",
        img: './image/post-8.jpeg',
        description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
      },
      {
    // 1
        userImg:"./image/user-1.jpg",
        date:'September 14, 2016',
        username:"Kabira Khan",
        img: './image/post-5.webp',
        description:'   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
      }
];