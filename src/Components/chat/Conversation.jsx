import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { setConversation, getConversation } from "../../Service/api";
import { formatDate } from "../../Utils/common-utils"

const Logo = styled("img")({
    height: "45px",
    width: "45px",
    borderRadius: "50%"
});

const Conversation = ({ user }) => {

    const [message, setMessage] = useState({});
    
    const {setPerson, account } = useContext(AccountContext);

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub }); 
            setMessage({ text: data?.message, timeStamp: data?.updatedAt, createdAt: data?.createdAt });
        }

        getConversationDetails();
    }, [account, user])

    const createUserChat = async () => {
        await setConversation({ senderId: account.sub, receiverId: user.sub }); //sequence
        setPerson(user);                                                       // matters
    }

    return (
        <Box onClick={createUserChat} style={{ display: "flex", justifyContent: "space-between", padding: "0 15px", cursor: "pointer" }}>
            <Box style={{ display: "flex" }}>
                <Box style={{ marginRight: "10px" }}>
                    <Logo src={user.picture} alt="" />
                </Box>
                <Box>
                    <Typography variant="h6">{user.name}</Typography>
                    {
                        message &&
                        <Typography >{!message.text && message.createdAt !== message.updatedAt ? "Media" : message.text}</Typography>
                    }
                </Box>
            </Box>
            <h6 style={{height:"25px", width:"25px", margin:"10px 2px"}}>{message?.timeStamp && formatDate(message?.timeStamp)}</h6>
        </Box>
    )
}

export default Conversation;