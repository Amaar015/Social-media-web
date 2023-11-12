import styled from "@emotion/styled";
import { AppBar, Box, InputBase, Toolbar, Typography,Badge, Avatar,Menu,MenuItem,anchorEl, } from "@mui/material";
import { Notifications, Pets } from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import user from '../image/user.png';
import { useState } from "react";
const StyledToolbar=styled(Toolbar)({
      display:"flex",
      justifyContent:"space-between",
   })

   const Search=styled("div")(({theme})=>({
      backgroundColor:"white",
      padding:"0 10px",
      borderRadius:theme.shape.borderRadius,
      width:"40%",
   }))
   
   const Icons=styled(Box)(({theme})=>({
      display:"none",
      gap:"20px",
      alignItems:"center",
      [theme.breakpoints.up('sm')]:{
         display:"flex",
      }
   }))

   const UserBox=styled(Box)(({theme})=>({
      display:"flex",
      gap:"10px",
      alignItems:"center",
      [theme.breakpoints.up('sm')]:{
         display:"none",
      }
   }))

function Navbar() {
   const [open,setOpen]=useState(false);
    return (
       <AppBar position="sticky">
         <StyledToolbar>
            <Typography variant="h6"
            sx={{display:{xs:"none",sm:"block"}}} >
                    AK-Book
            </Typography>
            <Pets sx={{display:{xs:"block",sm:"none"}}}/>
            <Search><InputBase placeholder="Searh...."/></Search>
            <Icons >
            <Badge badgeContent={4} color="error">
           <MailIcon color="white" />
           </Badge>
           <Badge badgeContent={2} color="error">
           <Notifications color="white" />
           </Badge>
           <Avatar src={user} sx={{width:30,height:30}}
            onClick={e=>setOpen(true)}/>
  
            </Icons>
            <UserBox onClick={e=>setOpen(true)}> 
            <Avatar src={user} sx={{width:30,height:30}}/>
            <Typography variant="span">Abdullah</Typography>
            </UserBox>
         </StyledToolbar>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
      //   anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
       </AppBar>
    );
  }
  
  export default Navbar;
  