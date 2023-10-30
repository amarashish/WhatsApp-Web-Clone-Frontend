import { useContext, useState } from "react";
import { styled, Box } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ForumIcon from '@mui/icons-material/Forum';
import InfoDrawer from "../chat/InfoDrawer";
import BasicMenu from "../chat/BasicMenu";
import { ImageContext } from "../../Context/ImageProvider";

const Logo = styled("img")({
  height: "42px",
  width: "42px"
});

const style = {color:"#54656f"};

const LeftPaneHeader = () => {

  const {imageUrl} = useContext(ImageContext)

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = () => {
    setOpenDrawer(true);
  };

  return (
    <Box className="left-pane-header">
      <Box>
        <Logo
          onClick={handleClick}
          src={ imageUrl }
          alt=""
          style={{ position: "relative", top: "2px", left: "7px", borderRadius: "50%" }}
        />
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
      </Box>
      <Box className="header-icons">
        <GroupAddIcon style={style}/>
        <DataUsageIcon style={style}/>
        <ForumIcon style={style}/>
        <BasicMenu style={style} setOpenDrawer={setOpenDrawer}/>
      </Box>
    </Box>
  );
};

export default LeftPaneHeader;
