import React, { useState } from 'react'
import { Tooltip,Fab,Modal,Box, Typography, Avatar, TextField, Stack,ButtonGroup,Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import user from '../image/user.png'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { DateRange } from '@mui/icons-material';

const StyleModal=styled(Modal)({
   display:"flex",
   alignItems:"center",
   justifyContent:'center'
})

const UserBox=styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:6,
  marginBottom:"10px"
})

const Add = () => {
  const [open ,setOpen]=useState(false);
  return (
    <>
    <Tooltip onClick={e=>{setOpen(true)}} 
    title="Add Post" sx={{position:'fixed',
      bottom:20,
      left:{ xs:"calc(50% - 25px)", md:30 }, 
      }}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyleModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  width={400} height={280} bgcolor={'background.default'} color={"text.primary"} p={3} borderRadius={5}>
           <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
           </Typography>
           <UserBox marginBottom={4}>
            <Avatar src={user} sx={{width:30,height:30}} />
            <Typography fontWeight={500} variant='span'>
                 Bare Log
            </Typography>
           </UserBox>
           <TextField
           sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind!"
          variant="standard"
        />
        <Stack direction='row' mt={2} mb={3} gap={2}>
           <EmojiEmotionsIcon color='primary'/>
           <VideoCameraBackIcon color='warning'/>
           <ImageIcon color='success'/>
           <PersonAddAlt1Icon color='error'/>

        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" aria-label="outlined primary button group">
         <Button>Post</Button>
         <Button sx={{width:'100px', marginLeft:"2px"}}><DateRange/></Button>
       </ButtonGroup>
        </Box>
      </StyleModal>
     </>
  )
}

export default Add
