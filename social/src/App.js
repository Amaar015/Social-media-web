import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import Settings from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
function App() {
const Mybutton=styled(Button)(({Theme})=>({
  backgroundColor:'secondary',
  color:"#333",
  margin:5,
  "&:hover":{
    backgroundColor:'lightblue'
  },
  "&:disabled":{
      backgroundColor:"black",
      color:"#fff"
  }
}))

  return (
     <div>
     <h1 >Hello bare log</h1>
     <Button variant='contained' color='secondary' startIcon={<Settings/>}> Hello world</Button>
     <Button variant='text' disabled> Text</Button>
     <Button variant='outlined'color='primary' startIcon={<SettingsIcon />}> Outlined</Button>
     <Button variant='outlined'color='success' startIcon={<AddIcon />}> Outlined</Button>
      <Typography variant='h1' color='primary'>
         Amaar
      </Typography>
      <Mybutton>
        BareLog
      </Mybutton>
       <Mybutton>
        Amaar
       </Mybutton>
     </div>
  );
}

export default App;
