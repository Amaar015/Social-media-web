import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Settings } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import ModeNightIcon from '@mui/icons-material/ModeNight';
function Sidebar() {
    return (
       <Box  flex={1} p={2} sx={{
         display:{xs:'none', sm:"block"}
       }}>
      
      <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
            </ListItem>
  
            <ListItem disablePadding>
            <ListItemButton component='a' href="#pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
            </ListItem>
  
              <ListItem disablePadding>
            <ListItemButton component='a' href="#groups">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component='a' href="#market-place">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component='a' href="#friends">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
            </ListItem>
              <ListItem disablePadding>
            <ListItemButton component='a' href="#setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component='a' href="#simple-list">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component='a' href="#mode">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
            </ListItem>
            
          </List>

       </Box>
    );
  }
  
  export default Sidebar;
  