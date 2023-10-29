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
      <div style={{width: "88%"}}>
      <h1 style={{ marginBottom: "0", fontSize:"36px", fontWeight: "300", color: "#41525d"}}>Download WhatsApp for Windows</h1>
      <h3 style={{ margin: "0 0 25px 0", fontSize: "18px", fontWeight: "400", lineHeight:"30px", color:"#667781" }}>
        Make calls, share your screen and get a faster experience when you
        download the Windows app.
      </h3>
      </div>
      <GetAppButton />
      <h4 style={{ marginTop: "80px", color:"#8696a0", fontWeight:300, position: "relative", top: "50px",}}>
        <LockIcon className='lock-icon'
          style={{
            position: "relative",
            height: "20px",
            width: "20px",
          }}
        />
        Your personal messages are end-to-end encrypted
      </h4>
    </Box>
  );
};

export default EmptyChat;
