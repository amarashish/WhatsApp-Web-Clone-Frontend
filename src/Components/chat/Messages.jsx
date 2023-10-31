
import { Box } from "@mui/material";
import { useEffect, useState, useRef, useContext } from "react";
import { getAllMessages } from "../../Service/api";
import Message from "./Message";
import { AccountContext } from "../../Context/AccountProvider";

const Messages = ({ person, conversation}) => {
    
    const [incomingMessage, setIncomingMessage] = useState(null);
    
    const [messages, setMessages] = useState([]);
    
    const { socket, newMessageFlag } = useContext(AccountContext);

    const chatWindowRef = useRef(null);

    //To scroll the chat window to the bottom
    useEffect(() => {
        const scrollToBottom = () => {
            if (chatWindowRef.current) {
              chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
            }
          };
        scrollToBottom();
      }, [messages]);


    //socket.io getMessage
    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [])

    // to get all the messages corresponding to the conversation id
    useEffect(() => {
        const getMessageDetails = async () => {
            const data = await getAllMessages(conversation._id);
            setMessages(data);
        }
        conversation && getMessageDetails();
    }, [person._id, conversation, newMessageFlag]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages((prev) => [...prev, incomingMessage])
    }, [incomingMessage, conversation])


    return (
        <Box ref={chatWindowRef} style={{ height: "100%", overflowY: "scroll", backgroundColor: "#ffffff", backgroundImage: "url('https://i.postimg.cc/P5ZSdjbF/whatsapp-background-imgae.webp')" }}>
            {
                messages && messages.map(message => <Message message={message} />)
            }
        </Box>
    )
};

export default Messages;