import { Box } from "@mui/material";
import ChatBoxHeader from "./ChatBoxHeader";
import Messages from "./Messages";
import ChatBoxFooter from "./ChatBoxFooter";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { newMessage, getConversation, uploadFile } from "../../Service/api";

const ChatBox = () => {

    const { account, person, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    const [message, setMessage] = useState(""); // typed in input field in chatbob footer

    const [conversation, setConversation] = useState({});

    const [file, setFile] = useState(null);


    //to get the conversation id of the conversation between two users
    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            console.log("This is the conversation data", data);
            setConversation(data);
        }
        person && getConversationDetails();
    }, [person, account]);


    //creating new message based on the input field values
    const sendText = async (e) => {
        if (e.key === "Enter") {

            if(!file && message.length === 0) // to prevent sending empty message
                return;

            let url = null;
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                const response = await uploadFile(formData);
                url = response.data;
            }

            const currentMessage = {
                conversationId: conversation._id,
                senderId: account.sub,
                receiverId: person.sub,
                text: message,
                file: url,
                size: file && file.size
            }

            socket.current.emit('sendMessage', currentMessage); //socket.io sendMessage

            setMessage("");
            setFile(null);

            await newMessage(currentMessage);
            setNewMessageFlag(!newMessageFlag);
        }
    }

    return (
        <Box style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

            <ChatBoxHeader />

            <Messages
                person={person}
                conversation={conversation}
            />

            <ChatBoxFooter
                message={message}
                sendText={sendText}
                setMessage={setMessage}
                file={file}
                setFile={setFile}
            />
        </Box>
    )
}
export default ChatBox;