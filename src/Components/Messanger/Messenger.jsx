import Branding from "../Login/Branding"
import LoginDialog from "../Login/LoginDialog";
import ChatDailog from "../chat/chatDialog";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { getVerifier } from "../../Service/api";
import Loading from "../Loading";

const Messenger = () => {
  const { account, setAccount, isLoading } = useContext(AccountContext);
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

    isLoading ? (
      <Loading />
    ) : (
      <Box>
        {loading ? (
           <Loading />
        ) : (
          <>
            {account ? <Box className="header-type2" /> : <Branding />}
            <Box style={{ backgroundColor: "#eae6df", backgroundImage: "linear-gradient(180deg, #eae6df, #d1d7db)", minHeight: "85vh" }}>
              {!account ? <LoginDialog /> : <ChatDailog />}
            </Box>
          </>
        )}
      </Box>
    )
  );
};

export default Messenger;
