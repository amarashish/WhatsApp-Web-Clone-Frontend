import {useContext, useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccountContext } from "../../Context/AccountProvider";

export default function BasicMenu({setOpenDrawer}) {

  const [anchorEl, setAnchorEl] = useState(null);

  const {setAccount} = useContext(AccountContext);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
  };
  
  const handleProfileClick = ()=>{
    setAnchorEl(null);
    setOpenDrawer(true);
  }
  
  const handleLogoutClick = ()=>{
    setAccount(null);
  }

  return (
    <div>
      <MoreVertIcon
        style={{position:'relative', top:"1.4px", color:"#54656f"}}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu 
        style={{margin:'15px 0 0 20px'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical:'top',
          horizontal: 'right'
        }}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settingst</MenuItem>
        <MenuItem onClick={handleClose}>New Group</MenuItem>
        <MenuItem onClick={handleClose}>Starred messages</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
