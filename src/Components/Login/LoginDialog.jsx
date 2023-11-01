import { Box, Card } from "@mui/material";
import UserGuide from "../Login/UserGuide";

import QRCode from "../Login/QRCode";
import Tutorial from "../Login/Tutorial";
import LinkWithPhone from "../Login/LinkWithPhone";
import GetWhatsApp from "../Login/GetWhatsAppWindow";

const LoginDialog = () => {
  return (
    <Card className="login-card">
      <div style={{ padding: "50px 65px 0" }}>
        <div style={{ paddingBottom: "50px", borderBottom: " 1px solid #e9edef" }}>
          <GetWhatsApp />
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <UserGuide />
            <QRCode />
          </Box>
        </div>
      </div>
      <div style={{ padding: "55px 65px"  }}><LinkWithPhone /></div>
      <Tutorial />
    </Card>
  );
};
export default LoginDialog;
