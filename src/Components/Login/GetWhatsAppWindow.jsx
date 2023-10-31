import { Box, Typography, styled } from "@mui/material";
import GetAppButton from "../Messanger/GetAppButton";

const Logo = styled("img")({
  height: "55px",
});

const GetWhatsApp = () => {
  return (
      <Box className="get-whatapp-windows">
        <Logo
          src="https://i.postimg.cc/44DcFYFh/ww.png"
          alt="w"
        />
        <Box style={{ padding: "0 24px" }}>
          <Typography variant="h6" className="get-whatapp-windows-content" style={{fontSize:"1.2rem", color:"#111b21", lineHeight:"1.2941"}}>
            Download WhatsApp for Windows
          </Typography>
          <Typography variant="h8" style={{fontSize:"1rem", color:"#54656f", lineHeight:"1.4286"}}>
            Get calling, screen sharing and a faster experience with the new
            Windows app.
          </Typography>
        </Box>
        <GetAppButton />
      </Box>
  )
}
export default GetWhatsApp;