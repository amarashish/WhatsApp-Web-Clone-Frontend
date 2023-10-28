import { useContext, useState } from "react";
import { styled, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoDrawer from "../chat/InfoDrawer";
import BasicMenu from "../chat/BasicMenu";
import { AccountContext } from "../../Context/AccountProvider.jsx";
import { ImageContext } from "../../Context/ImageProvider";
import { BASE_URL } from "../../Constants/constants";

const Logo = styled("img")({
  height: "42px",
  width: "42px"
});


const LeftPaneHeader = () => {

  const {account} = useContext(AccountContext);
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
          src={imageUrl.includes("uploads") ? `${BASE_URL}/profile/${account.sub}`: imageUrl }
          alt=""
          style={{ position: "relative", top: "2px", left: "7px", borderRadius: "50%" }}
        />
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
      </Box>
      <Box className="header-icons">
        <PeopleIcon />
        <AccessTimeIcon />
        <ChatIcon />
        <BasicMenu />
      </Box>
    </Box>
  );
};

export default LeftPaneHeader;
