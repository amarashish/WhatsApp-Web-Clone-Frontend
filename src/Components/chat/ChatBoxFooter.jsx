import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ClearIcon from '@mui/icons-material/Clear';
import MoodIcon from '@mui/icons-material/Mood';
import { Box, InputBase } from "@mui/material";

const ChatBoxFooter = ({ message, sendText, setMessage, file, setFile }) => {

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const removeFile = () => {
        setFile(null);
    }

    return (
        <Box style={{ display: "flex", padding: "10px 20px", width: "95%", justifyContent: "space-between", alignItems: "center" }}>
            <label htmlFor="fileInput">
                <AddIcon className="upload-btn" />
            </label>
            
            <Box style={{ display: "flex", padding: "5px 10px", background: "#ffff", width: "90%", borderRadius: "10px", alignItems: "center" }}>
                <span>
                    <MoodIcon style={{ alignSelf: "center", color: "#54656f" }} />
                </span>

                <div style={{ position: "relative", width: "20.5%", zIndex: "3", right: "10%", display: file ? "flex" : "none" }}>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={onFileChange}
                    />
                    <ClearIcon onClick={removeFile} style={{ width: "16px", height: "16px", borderRadius: "50%", background: "grey", alignSelf: "center" }} />
                </div>

                <InputBase
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={sendText}
                    style={{ width: "95%", marginLeft: "5px", position: "relative", right: file ? "9%" : "0" }}
                    placeholder="Type a message"
                    value={message}
                />
            </Box>
            <KeyboardVoiceIcon style={{ color: "#54656f" }} />
        </Box>
    )
}

export default ChatBoxFooter;