import { getUsers } from "../../Service/api.js";
import { useState, useEffect, useContext } from "react";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation.jsx";
import styled from "@emotion/styled";
import { getAllConversation } from "../../../src/Service/api.js";
import { AccountContext } from "../../Context/AccountProvider.jsx";

const StyledDivider = styled(Divider)`
  margin: 5px 0 5px 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const UsersChat = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account} = useContext(AccountContext);

    // to get all the users stored in DB or based on the search.
    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers();

            const filterData = response.filter((user) => user.name.toLowerCase().includes(text.toLowerCase())); //&& user.name !== account.name
            setUsers(filterData);
        };
        fetchData();
    }, [text]);


    // to get all the conversation of the logged in user.
    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getAllConversation( account.sub );
            console.log("these are all conversation of the logged user ", data);
        }
        getConversationDetails();
    }, [account.sub]);



    return (
        <Box style={{ height: "81vh", overflow: "overlay" }}>
            {users.map((user) => (
                <>
                    <Conversation user={user} />
                    <StyledDivider />
                </>
            ))}
        </Box>
    );
};

export default UsersChat;
