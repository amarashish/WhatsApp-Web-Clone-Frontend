import { Box } from "@mui/material";
import LoginWindow from "./LoginWindow";

const QRCode = ({setLogin}) => {
  return (
    <Box style={{ position: "relative" }}>
      <img
        className="QRCode"
        src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"
        alt="qr-code"
      />
      <LoginWindow setLogin={setLogin}/>
    </Box>
  );
};
export default QRCode;