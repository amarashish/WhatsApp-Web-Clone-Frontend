
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { formatDate } from "../../Utils/common-utils.jsx";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';

const Sent = styled(Box)`
    background-color: #dcf8c6;
    max-width: 60%;
    margin: 3px 70px 3px auto;
    padding: 2px 5px; 
    width: fit-content;
    display: flex;
    border-radius: 10px;
    box-sizing: border-box;
    word-break: break-word;
`
const Received = styled(Box)`
    background-color: #ffffff;
    max-width: 60%;
    margin: 3px 0 3px 70px;
    padding: 2px 5px; 
    width: fit-content;
    display: flex;
    border-radius: 10px;
    box-sizing: border-box;
    word-break: break-word;
`

const Text = styled(Typography)`
    align-self: center;
    font-size: 14px;
    padding: 5px 8px 5px 5px;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`

const Time = styled(Typography)`
    margin-top: auto;
    font-size: 10px;
    color: #919191;
`

const Message = ({ message }) => {

    let type = null, name = null, size = 0, unit = "B";
    const file = () => {
        if (message.file) {
            if (message.file.toLowerCase().includes("jpg") || message.file.toLowerCase().includes("jpeg") || message.file.toLowerCase().includes("png")) {
                type = "img";
            }
            else {
                type = "docx"
            }
            const a = message.file.split('/');
            name = a[a.length - 1];

            size = message.size;
            if (size > 1024) {
                size = Math.trunc(size / 1024);
                unit = "KB";
            }
            if (size > 1024) {
                size = Math.trunc(size / 1024);
                unit = "MB";
            }
        }
    }
    file();

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Sent>
                        <Box style={{ padding: "3px" }}>
                            {type === "img" &&
                                <img src={message.file} alt="" style={{ height: "250px", width: "250px", borderRadius: "6px" }} />
                            }

                            {type === "docx" &&
                                <Box style={{ display: "flex", margin: "10px 0 0 0", padding: "10px", background: "rgb(215 238 197)", borderRadius: "10px", alignItems: "center" }}>
                                    <DescriptionIcon style={{ height: "45px", width: "45px", marginRight: "5px", color: "rgb(84, 101, 111)" }} />
                                    <Box style={{ display: "flex", flexDirection: "column", height: "60px", width: "250px", justifyContent: "center" }}>
                                        <Box>
                                            <Typography style={{ color: "rgb(84, 101, 111)" }}>{name}</Typography>
                                            <Typography style={{ color: "rgb(84, 101, 111)" }}>{name.split('.')[1].toUpperCase()} - {size} {unit}</Typography>
                                        </Box>
                                    </Box>
                                    {message.file &&
                                        <a href={message.file} target="_blank" rel="noreferrer" download>
                                            <DownloadIcon style={{ alignSelf: "center", border: "0.5px solid grey", borderRadius: "50%", padding: "5px", marginRight: "10px", color: "rgb(84, 101, 111)" }} />
                                        </a>}
                                </Box>
                            }

                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                <Text>{message.text}</Text>
                                <Time>{formatDate(message.createdAt)}</Time>
                            </Box>
                        </Box>
                    </Sent>
                    :
                    <Received>
                    <Box style={{ padding: "3px" }}>
                            {type === "img" &&
                                <img src={message.file} alt="" style={{ height: "250px", width: "250px", borderRadius: "6px" }} />
                            }

                            {type === "docx" &&
                                <Box style={{ display: "flex", margin: "10px 0 0 0", padding: "10px", background: "rgb(249 249 249)", borderRadius: "10px", alignItems: "center" }}>
                                    <DescriptionIcon style={{ height: "45px", width: "45px", marginRight: "5px", color: "rgb(84, 101, 111)" }} />
                                    <Box style={{ display: "flex", flexDirection: "column", height: "60px", width: "250px", justifyContent: "center" }}>
                                        <Box>
                                            <Typography style={{ color: "rgb(84, 101, 111)" }}>{name}</Typography>
                                            <Typography style={{ color: "rgb(84, 101, 111)" }}>{name.split('.')[1].toUpperCase()} - {size} {unit}</Typography>
                                        </Box>
                                    </Box>
                                    {message.file &&
                                        <a href={message.file} target="_blank" rel="noreferrer" download>
                                            <DownloadIcon style={{ alignSelf: "center", border: "0.5px solid grey", borderRadius: "50%", padding: "5px", marginRight: "10px", color: "rgb(84, 101, 111)" }} />
                                        </a>}
                                </Box>
                            }

                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                <Text>{message.text}</Text>
                                <Time>{formatDate(message.createdAt)}</Time>
                            </Box>
                        </Box>
                    </Received>

            }
        </>
    )
}

export default Message;