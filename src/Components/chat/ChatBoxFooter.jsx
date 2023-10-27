import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoodIcon from '@mui/icons-material/Mood';
import { Box, InputBase } from "@mui/material";
import { useEffect } from 'react';
import { uploadFile } from '../../Service/api';

const ChatBoxFooter = ({ message, sendText, setMessage, file, setFile }) => {

    useEffect(() => {
        const setImage = async () => {

            const data = new FormData();
            data.append("file", file);

            await uploadFile(data);
        }
        file && setImage();
    }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setMessage(e.target.files[0].name);
    }

    return (
        <Box style={{ display: "flex", padding: "10px 20px", width: "95%", justifyContent: "space-between", alignItems: "center" }}>
            <label htmlFor="fileInput">
                <AddIcon className="upload-btn" />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={onFileChange}
            />
            <Box style={{ display: "flex", padding: "5px 10px", background: "#ffff", width: "90%", borderRadius: "10px" }}>
                <MoodIcon style={{ alignSelf: "center" }} />
                <InputBase
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={sendText}
                    style={{ width: "95%", marginLeft: "5px" }}
                    placeholder="Type a message"
                    value={message}
                />
            </Box>
            <KeyboardVoiceIcon />
        </Box>
    )
}

export default ChatBoxFooter;