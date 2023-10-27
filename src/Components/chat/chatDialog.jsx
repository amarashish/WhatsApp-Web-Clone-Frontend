import { Box, Card } from "@mui/material";
import LeftPane from "./LetfPane";
import RightPane from "./RightPain";

const ChatDialog = () => {

  return (
    <Card style={{borderRadius: "0" }} className="main-chat-window">
      <Box className="main-char-box">
        <LeftPane />
        <RightPane />
      </Box>
    </Card>
  );
};

export default ChatDialog;
