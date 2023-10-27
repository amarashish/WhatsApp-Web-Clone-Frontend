import { Box, Card } from "@mui/material";
import UserGuide from "../Login/UserGuide";

import QRCode from "../Login/QRCode";
import Tutorial from "../Login/Tutorial";
import LinkWithPhone from "../Login/LinkWithPhone";
import GetWhatsApp from "../Login/GetWhatsAppWindow";

const LoginDialog = ({setLogin}) => {
  return (
    <Card className="login-card">
      <GetWhatsApp />
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <UserGuide />
        <QRCode setLogin={setLogin}/>
      </Box>
      <hr style={{ color: "#b1c1cc", margin: "25px 0" }} />
      <LinkWithPhone />
      <Tutorial />
    </Card>
  );
};
export default LoginDialog;
