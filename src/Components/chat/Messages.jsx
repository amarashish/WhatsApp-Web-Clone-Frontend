
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllMessages } from "../../Service/api";
import Message from "./Message";

const Messages = ({ person, conversation, reloadMessages }) => {

    const [messages, setMessages] = useState([]);

    //to get all the messages corresponding to the conversation id
    useEffect(() => {
        const getMessageDetails = async () => {
            const data = await getAllMessages(conversation._id);
            setMessages(data);
            console.log("these are all the messages between the looged and clicked user", data);
        }
        conversation && getMessageDetails();
    }, [person._id, conversation, reloadMessages]);

    return (
        <Box style={{ height: "100%", overflowY: "scroll", backgroundColor: "#ffffff", backgroundImage: "url('https://i.postimg.cc/P5ZSdjbF/whatsapp-background-imgae.webp')" }}>
            {
                messages && messages.map(message => <Message message={message} />)
            }
        </Box>
    )
};

export default Messages;