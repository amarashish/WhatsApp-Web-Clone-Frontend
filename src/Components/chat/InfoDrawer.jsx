import { Drawer, Box } from "@mui/material";

import { useContext, useState } from "react";
import { AccountContext } from "../../Context/AccountProvider.jsx";
import { updateUser } from "../../Service/api.js";
import CloseDialog from "./CloseDialog.jsx";
import BigProfile from "./BigProfile.jsx";
import Name from "./Name.jsx";
import Mid from "./Mid.jsx";
import About from "./About.jsx";

const drawerStyle = {
  left: 20,
  top: 22,
  bottom: 30,
  maxWidth: "28.5%",
  maxHeight: "95%",
  overflowX: "hidden"
};

const InfoDrawer = ({ open, setOpen}) => {

  const { account} = useContext(AccountContext);

  const [isClickedName, setisClikedName] = useState(false);
  const [isClickedAbout, setisClikedAbout] = useState(false);
  const [currentUser, setCurrentUser] = useState(account);

  const handleNameChange = (event) => {
    setCurrentUser({
      ...currentUser,
      name: event.target.value
    })
  };

  const handleClickName = async () => {
    const newClickedName = !isClickedName;
    setisClikedName(!isClickedName);

    if (!newClickedName) {
      await updateUser(currentUser);
    }
  };

  const handleAboutChange = (event) => {
    setCurrentUser({
      ...currentUser,
      about: event.target.value
    })
  };

  const handleClickAbout = async () => {
    const newClickedAbout = !isClickedAbout;
    setisClikedAbout(newClickedAbout);

    if (!newClickedAbout) {
      await updateUser(currentUser);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      BackdropProps={{ invisible: true }}
    >
      <CloseDialog
        handleClose={handleClose}
      />

      <BigProfile/>

      <Box
        style={{ backgroundColor: '#f0f2f5', height: '96%' }}
      >
        <Name
          isClickedName={isClickedName}
          currentUser={currentUser}
          handleNameChange={handleNameChange}
          handleClickName={handleClickName} />
          
        <Mid />

        <About
          isClickedAbout={isClickedAbout}
          currentUser={currentUser}
          handleAboutChange={handleAboutChange}
          handleClickAbout={handleClickAbout} />
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
