import { Box } from "@mui/material";
import GetAppButton from "../Messanger/GetAppButton";
import styled from "@emotion/styled";
import LockIcon from "@mui/icons-material/Lock";

const Image = styled("img")({
  height: "200px",
});

const EmptyChat = () => {
  return (
    <Box className='empty-chat-window'>
      <Image
        src="https://i.postimg.cc/Y9SZ4rct/Empty-Chat-window.png"
        alt="#"
      />
      <h1 style={{ marginBottom: "0" }}>Download WhatsApp for Windows</h1>
      <h3 style={{ marginTop: "0" }}>
        Make calls, share your screen and get a faster experience when you
        download the Windows app.
      </h3>
      <GetAppButton />
      <h5 style={{ marginTop: "80px" }}>
        <LockIcon className='lock-icon'
          style={{
            position: "relative",
            top: "3px",
            height: "20px",
            width: "20px",
          }}
        />
        Your personal messages are end-to-end encrypted
      </h5>
    </Box>
  );
};

export default EmptyChat;
