import {List, ListItem, Box} from '@mui/material';

const UserGuide = ()=> {
    return (
    <Box>
    <h1 className="guide-list-title" style={{fontSize:"28px", fontWeight:"300", color:"#41525d"}}>Use WhatsApp on your computer</h1>
    <List>
    <ListItem style={{padding:"0", lineHeight:2.5, fontSize:"18px", color:"#3b4a54",wordSpacing: "2px"}}>
        1. Open whatsapp on your phone
      </ListItem>
      <ListItem style={{padding:"0", lineHeight:2.5, fontSize:"18px", color:"#3b4a54", wordSpacing: "2px",}}>
        2. Go to settings by tapping on your profile photo <strong>&nbsp; Menu &nbsp; </strong> or, <strong style={{padding:"0", lineHeight:2.5}}> &nbsp; Settings &nbsp; </strong>
      </ListItem>
      <ListItem style={{padding:"0", lineHeight:2.5, fontSize:"18px", color:"#3b4a54", wordSpacing: "2px"}}>
        3. Tap on Linked Devices and then <strong> &nbsp; Link a Devices  &nbsp;</strong>
      </ListItem>
      <ListItem style={{padding:"0", lineHeight:2.5, fontSize:"18px", color:"#3b4a54", wordSpacing: "2px"}}>
        4. Point your phone to this screen to capture the QR code
      </ListItem>
    </List>
  </Box>
    )
}
export default UserGuide;