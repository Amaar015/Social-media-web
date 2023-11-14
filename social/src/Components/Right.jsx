import * as React from 'react';
import { Box, Typography,AvatarGroup,Avatar,ImageList,ImageListItem,List,ListItem,ListItemAvatar,
        ListItemText,Divider } from "@mui/material";
import user1 from '../image/user-1.jpg';
import user2 from '../image/user-2.png';
import user3 from '../image/user-3.webp';
import user4 from '../image/user-4.png';
import user5 from '../image/user5.jpg';
import user6 from '../image/user6.png';
import user7 from '../image/user7.jpg';
import user8 from '../image/user8.jpg';
import user9 from '../image/user9.png';
import user10 from '../image/user10.jpg';
function Right() {
    return (
       <Box flex={2}
       p={2} sx={{
         display:{xs:'none', sm:"block"}}}>
        <Box position='fixed' width={300}> 
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
         <Avatar alt="Remy Sharp" src={user1} />
         <Avatar alt="Travis Howard" src={user2} />
         <Avatar alt="Cindy Baker" src={user3} />
         <Avatar alt="Agnes Walker" src={user4} />
         <Avatar alt="Trevor Henderson" src={user5} />
         <Avatar alt="Remy Sharp" src={user6} />
         <Avatar alt="Travis Howard" src={user7} />
         <Avatar alt="Cindy Baker" src={user8} />
         <Avatar alt="Agnes Walker" src={user9} />
         <Avatar alt="Trevor Henderson" src={user10} />
       </AvatarGroup>
       <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
         Latest Images
       </Typography>
       <ImageList  cols={3} rowHeight={100} gap={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant="h6" fontWeight={100}  mt={2} mb={2}>
         Latest Chat
       </Typography>
         
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {chatData.map((item)=>(
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.img} />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               Hi there
              </Typography>
              {item.description}
            </React.Fragment>
          }
        />
        {/* <Divider variant="inset" component="li" /> */}
      </ListItem>
      
      ))}
    </List>

        </Box>
       </Box>
    );
  }
  
  export default Right;
 
 
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  }
];


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