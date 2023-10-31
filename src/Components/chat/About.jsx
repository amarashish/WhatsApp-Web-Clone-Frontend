import { Box, Typography, Input } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const About = ({isClickedAbout, currentUser, handleAboutChange, handleClickAbout})=>{
    return (
        <Box
          style={{ backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", padding: "10px 25px", boxShadow: "0 4px 8px rgba(0.0, 0.0, 0.0, 0.2)" }}>
          <Box style={{ width: "90%" }}>
            <Typography style={{color:"#008069", marginBottom:"15px"}}>About</Typography>
            {isClickedAbout ? (
              <Input
                value={currentUser.about}
                onChange={handleAboutChange}
                style={{ width: "100%" }} />
            ) : (
              <Typography>{currentUser.about}</Typography>
            )}
          </Box>
          {isClickedAbout ? (
            <DoneIcon
              onClick={handleClickAbout}
              style={{ alignSelf: "end", color:"#54656f" }} />
          ) : (
            <EditIcon
              onClick={handleClickAbout}
              style={{ alignSelf: "end", color:"#54656f" }} />
          )}
        </Box>
    )
};
export default About;