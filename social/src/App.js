
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import Right from './Components/Right';
import Sidebar from './Components/Sidebar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Add from './Components/Add';
import { useState } from 'react';

function App() {
   const [mode, setmode] =useState("light")
   const darktheme= createTheme({
        palette:{
         mode:mode, 
        }
   })
  return (
   <ThemeProvider theme={darktheme}>
     <Box bgcolor={'background.default'} color={"text.primary"}>
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar setmode={setmode} mode={mode}/>
        <Feed/>
        <Right/>
        </Stack>
        <Add/>
     </Box>
     </ThemeProvider>
  );
}

export default App;
