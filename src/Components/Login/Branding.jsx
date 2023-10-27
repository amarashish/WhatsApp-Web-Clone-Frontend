
import { Box, styled, Typography } from "@mui/material"

const Logo = styled("img")({
  height: 42,
  whidth: 42,
});

const Branding = () => {
  return (
    <Box className="header">
      <Box className="header-logo">
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="image"
        />
        <Typography className="branding">WHATSAPP WEB</Typography>
      </Box>
    </Box>)
}

export default Branding;