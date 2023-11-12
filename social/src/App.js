
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import Right from './Components/Right';
import Sidebar from './Components/Sidebar';
import { Box, Stack } from '@mui/material';

function App() {
  return (
     <Box>
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar/>
        <Feed/>
        <Right/>
        </Stack>
     </Box>
  );
}

export default App;
