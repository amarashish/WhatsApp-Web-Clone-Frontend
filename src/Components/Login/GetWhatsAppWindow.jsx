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
          <Typography variant="h6" className="get-whatapp-windows-content">
            Download WhatsApp for Windows
          </Typography>
          <Typography variant="h8" className="get-whatapp-windows-content">
            Get calling, screen sharing and a faster experience with the new
            Windows app.
          </Typography>
        </Box>
        <GetAppButton />
      </Box>
  )
}
export default GetWhatsApp;