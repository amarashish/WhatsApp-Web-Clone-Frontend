import { Box, Card } from "@mui/material";
import LeftPane from "./LetfPane";
import RightPane from "./RightPain";
import ImageProvider from "../../Context/ImageProvider.jsx";


const ChatDialog = () => {

  return (
    <Card style={{ borderRadius: "0" }} className="main-chat-window">
      <Box className="main-char-box">
        <ImageProvider>
          <LeftPane />
          <RightPane />
        </ImageProvider>
      </Box>
    </Card>
  );
};

export default ChatDialog;
