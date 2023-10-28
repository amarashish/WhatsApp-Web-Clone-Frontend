import { useContext, useEffect, useState } from "react";
import { styled, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoDrawer from "../chat/InfoDrawer";
import BasicMenu from "../chat/BasicMenu";
import { AccountContext } from "../../Context/AccountProvider.jsx";
import { getProfilePic } from "../../Service/api";
import { BASE_URL } from "../../Constants/BaseUrl";


const Logo = styled("img")({
  height: "42px",
  width: "42px"
});


const LeftPaneHeader = () => {

  const {picture, setPicture, account} = useContext(AccountContext);

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = () => {
    setOpenDrawer(true);
  };

  useEffect(() => {
    const getProfile = async () => {
      const response = await getProfilePic(account.sub);
      console.log(response.data);
      setPicture(response.data);
    }
    account && getProfile();
  }, [account, setPicture])

  return (
    <Box className="left-pane-header">
      <Box>
        <Logo
          onClick={handleClick}
          src={picture ? `${BASE_URL}/profile/${account.sub}`: account.picture }
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
