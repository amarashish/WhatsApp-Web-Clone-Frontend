import { Box, Typography, Input } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const Name = ({isClickedName, currentUser, handleNameChange, handleClickName})=>{
    

    return (
        <Box
          style={{ backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
          <Box style={{ width: "90%" }}>
            <Typography style={{ lineHeight: "3" }}>Your Name</Typography>
            {isClickedName ? (
              <Input
                value={currentUser.name}
                onChange={handleNameChange}
                style={{ width: "100%" }} />
            ) : (
              <Typography>{currentUser.name}</Typography>
            )}
          </Box>
          {isClickedName ? (
            <DoneIcon
              onClick={handleClickName}
              style={{ alignSelf: "end" }} />
          ) : (
            <EditIcon
              onClick={handleClickName}
              style={{ alignSelf: "end" }} />
          )}
        </Box>
    )
}

export default Name;