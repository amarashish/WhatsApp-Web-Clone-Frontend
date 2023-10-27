import { Box, Typography, Input } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const About = ({isClickedAbout, currentUser, handleAboutChange, handleClickAbout})=>{
    return (
        <Box
          style={{ backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
          <Box style={{ width: "90%" }}>
            <Typography>About</Typography>
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
              style={{ alignSelf: "end" }} />
          ) : (
            <EditIcon
              onClick={handleClickAbout}
              style={{ alignSelf: "end" }} />
          )}
        </Box>
    )
};
export default About;