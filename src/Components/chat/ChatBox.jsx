import { Box } from "@mui/material";
import ChatBoxHeader from "./ChatBoxHeader";
import Messages from "./Messages";
import ChatBoxFooter from "./ChatBoxFooter";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { newMessage, getConversation } from "../../Service/api";

const ChatBox = () => {

    const { account, person } = useContext(AccountContext);

    const [reloadMessages, setReloadMessages] = useState(false);

    const [message, setMessage] = useState("");

    const [conversation, setConversation] = useState({});

    const [file, setFile] = useState(null);

    //to get the conversation id of the conversation between two users
    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            console.log("This is the conversation data", data);
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub, account.sub]);


    //creating new message based on the input field value
    const sendText = async (e) => {
        if (e.key === "Enter") {
            const currentMessage = {
                conversationId: conversation._id,
                senderId: account.sub,
                receiverId: person.sub,
                type: "text",
                text: message
            }
            await newMessage(currentMessage);
            setReloadMessages(!reloadMessages);
            setMessage("");
        }
    }

    return (
        <Box style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <ChatBoxHeader />
            <Messages
                person={person}
                conversation={conversation} r
                eloadMessages={reloadMessages} />
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