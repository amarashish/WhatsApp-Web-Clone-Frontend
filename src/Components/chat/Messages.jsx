
import { Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { getAllMessages } from "../../Service/api";
import Message from "./Message";

const Messages = ({ person, conversation, reloadMessages, setReloadMessages}) => {

    const chatWindowRef = useRef(null);

    const [messages, setMessages] = useState([]);

    // to get all the messages corresponding to the conversation id
    useEffect(() => {
        const getMessageDetails = async () => {
            const data = await getAllMessages(conversation._id);
            setMessages(data);
        }
        conversation && getMessageDetails();
    }, [person._id, conversation, reloadMessages]);

    // Function to scroll the chat window to the bottom
    const scrollToBottom = () => {
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      };
    
      useEffect(() => {
        scrollToBottom();
      }, [reloadMessages]);


    return (
        <Box ref={chatWindowRef} style={{ height: "100%", overflowY: "scroll", backgroundColor: "#ffffff", backgroundImage: "url('https://i.postimg.cc/P5ZSdjbF/whatsapp-background-imgae.webp')" }}>
            {
                messages && messages.map(message => <Message message={message} />)
            }
        </Box>
    )
};

export default Messages;