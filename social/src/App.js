import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import Settings from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
function App() {
  return (
     <div>
     <h1>Hello bare log</h1>
     <Button variant='contained' color='secondary' startIcon={<Settings/>}> Hello world</Button>
     <Button variant='text' disabled> Text</Button>
     <Button variant='outlined'color='success' startIcon={<SettingsIcon />}> Outlined</Button>
     <Button variant='outlined'color='success' startIcon={<AddIcon />}> Outlined</Button>
      <Typography variant='h1'>
         Amaar
      </Typography>
      <Button variant='contianed' sx={{
        backgroundColor:'pink',
        color:"#333",
        margin:5,
      }}>Bare Log</Button>
     </div>
  );
}

export default App;
