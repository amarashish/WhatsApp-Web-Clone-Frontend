import { useContext, useState } from "react";
import { styled, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoDrawer from "../chat/InfoDrawer";
import BasicMenu from "../chat/BasicMenu";
import { AccountContext } from "../../Context/AccountProvider.jsx";


const Logo = styled("img")({
  height: 40,
});

const LeftPaneHeader = () => {

  const [openDrawer, setOpenDrawer] = useState(false);
  const { account} = useContext(AccountContext);
  const handleClick = () => {
    setOpenDrawer(true);
  };

  return (
    <Box className="left-pane-header">
      <Box>
        <Logo
          onClick={handleClick}
          src={account.picture}
          alt=""
          style={{ position: "relative", top: "2px", left: "5px", borderRadius: "50%" }}
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
