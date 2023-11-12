import { Box } from "@mui/material";

function Right() {
    return (
       <Box bgcolor='skyblue' flex={2}
       p={2} sx={{
         display:{xs:'none', sm:"block"}}}>
        Right
       </Box>
    );
  }
  
  export default Right;
  