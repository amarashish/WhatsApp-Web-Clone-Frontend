import Branding from "../Login/Branding"
import LoginDialog from "../Login/LoginDialog";
import ChatDailog from "../chat/chatDialog";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Box >
      {account ? <Box className="header-type2" /> : <Branding />}
      <Box style={{backgroundColor: "#eae6df", backgroundImage:"linear-gradient(180deg, #eae6df, #d1d7db)", minHeight:"85vh"}}>
        {!account ? <LoginDialog /> : <ChatDailog />}
      </Box>
    </Box>
  );
};

export default Messenger;
