import { Box } from "@mui/material";
import ChatBoxHeader from "./ChatBoxHeader";
import Messages from "./Messages";
import ChatBoxFooter from "./ChatBoxFooter";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { newMessage, getConversation, uploadFile } from "../../Service/api";

const ChatBox = () => {

    const { account, person } = useContext(AccountContext);

    const [message, setMessage] = useState("");

    const [reloadMessages, setReloadMessages] = useState(false);

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

            let url = null;
            if(file){
                const formData = new FormData();
                formData.append("file", file);
                const response = await uploadFile(formData);
                url = response.data;
                setFile(null);
            }

            const currentMessage = {
                conversationId: conversation._id,
                senderId: account.sub,
                receiverId: person.sub,
                text: message,
                file: url,
                size: file && file.size
            } 
            setMessage("");
            await newMessage(currentMessage);
            setReloadMessages(!reloadMessages);
        }

    }

    return (
        <Box style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

            <ChatBoxHeader />

            <Messages
                person={person}
                conversation={conversation} 
                reloadMessages={reloadMessages}
                setReloadMessages={setReloadMessages}
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