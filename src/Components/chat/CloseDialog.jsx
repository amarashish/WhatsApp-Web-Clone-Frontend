import { Drawer, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CloseDialog = ({handleClose})=>{
    return (
        <Box className="info-drawer-header">
        <Box style={{ display: "flex" }}>
          <ArrowBackIcon
            className="back-arrow"
            onClick={handleClose} />
          <Typography
            className="header-profile"
          >Profile</Typography>
        </Box>
      </Box>
    )
}

export default CloseDialog;