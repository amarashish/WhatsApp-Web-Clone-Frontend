import { Box, Typography, styled } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from '@mui/icons-material/Videocam';
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { ImageContext } from "../../Context/ImageProvider";

const Logo = styled("img")({
    height: "42px",
    width: "42px",
    borderRadius: "50%",
    marginRight: "15px"
});

const ChatBoxHeader = () => {

    const { person } = useContext(AccountContext);

    return (
        <Box className="left-pane-header">
            <Box style={{ display: "flex", alignItems: "center" }}>
                <Logo src={person.picture} alt="" />
                <Typography>{person.name}</Typography>
            </Box>
            <Box style={{ width: "12%", padding: "10px", display: "flex", justifyContent: "space-between", marginRight: "20px" }}>
                <VideocamIcon style={{color:"#54656f"}}/>
                <SearchIcon style={{color:"#54656f"}}/>
                <MoreVertIcon style={{color:"#54656f"}}/>
            </Box>
        </Box>
    )
}
export default ChatBoxHeader;