import Branding from "../Login/Branding"
import LoginDialog from "../Login/LoginDialog";
import ChatDailog from "../chat/chatDialog";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { getVerifier } from "../../Service/api";
import {LinearProgress} from "@mui/material";

const Messenger = () => {
  const { account, setAccount } = useContext(AccountContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await getVerifier({ authToken: localStorage.authToken });
        user && setAccount(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (localStorage?.authToken) {
      getUserData();
    } else {
      setLoading(false); 
    }
  }, []);

  return (
    <Box>
      {loading ? (
        <LinearProgress variant="determinate"/> 
      ) : (
        <>
          {account ? <Box className="header-type2" /> : <Branding />}
          <Box style={{ backgroundColor: "#eae6df", backgroundImage: "linear-gradient(180deg, #eae6df, #d1d7db)", minHeight: "85vh" }}>
            {!account ? <LoginDialog /> : <ChatDailog />}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Messenger;
