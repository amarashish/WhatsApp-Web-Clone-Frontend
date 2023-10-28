import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext } from "react";
import { setConversation } from "../../Service/api";
import { BASE_URL } from "../../Constants/BaseUrl";

const Logo = styled("img")({
    height: "45px",
    width: "45px",
    borderRadius: "50%"
});


const Conversation = ({ user, picture }) => {

    const {setPerson, account} = useContext(AccountContext);

    const createUserChat = async()=> { 
        await setConversation({senderId: account.sub, receiverId: user.sub});
        setPerson(user);
    }
    return (
        <Box onClick={createUserChat} style={{ display: "flex", alignItem: "flex-start", padding: "0 15px", cursor: "pointer" }}>
            <Box style={{ marginRight: "10px" }}>
                <Logo src={user.picture.includes("uploads") ? `${BASE_URL}/profile/${user.sub}` : user.picture} alt="" />
            </Box>
            <Box>
                <Typography variant="h6">{user.name}</Typography>
            </Box>
        </Box>
    )
}

export default Conversation;