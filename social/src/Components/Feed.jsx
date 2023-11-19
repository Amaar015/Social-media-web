import Post from "./Post";
import {Box} from '@mui/material';
function Feed() {
    return (
       <Box  flex={4} p={2} alignItems='center'>

         <Post/>
         
       </Box>
    );
  }
  
  export default Feed;
  