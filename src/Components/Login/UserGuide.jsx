import {List, ListItem, Box} from '@mui/material';

const UserGuide = ()=> {
    return (
    <Box style={{ padding: "56px 0 56px  56px" }}>
    <h1 className="guide-list-title">Use WhatsApp on your computer</h1>
    <List>
      <ListItem className="guide-list">
        2. Go to settings by tapping on your profile photo,{" "}
        <strong style={{ padding: "0 6px" }}> Menu </strong> or
        <strong style={{ padding: "0 6px" }}> Settings </strong>
      </ListItem>
      <ListItem className="guide-list">
        3. Tap on{" "}
        <strong style={{ padding: "0 6px" }}> Linked Devices </strong> and
        then <strong style={{ padding: "0 6px" }}> Link a Device </strong>
      </ListItem>
      <ListItem className="guide-list">
        4. Point your phone to this screen to capture the QR code
      </ListItem>
    </List>
  </Box>
    )
}
export default UserGuide;