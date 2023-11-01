import { Box, Button } from "@mui/material";
import LoginWindow from "./LoginWindow";
import PhoneSingIn from "./PhoneSignIn";
import { useState } from "react";

const QRCode = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  }

  return (
    <Box
      style={{ display: "flex", flexDirection: "column", height: "250px", width: "250px", alignItems: "center", justifyContent: "center", border: "1px solid grey", backgroundImage: "url('https://i.postimg.cc/DZgvj7PX/qrcode-1.jpghttps://www.ginifab.com/feeds/qr_code/img/qrcode.jpg')" }}>
      <LoginWindow />
      <Button onClick={handleClick} style={{ background: "rgb(0, 113, 92)", color: "#fff", width: "200px", marginTop: "20px" }}>LOGIN WITH PHONE</Button>
      <PhoneSingIn click={click} setClick={setClick} />
    </Box>
  );
};
export default QRCode;