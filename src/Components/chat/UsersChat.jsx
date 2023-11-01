import { getUsers, newMessage } from "../../Service/api.js";
import { useState, useEffect, useContext } from "react";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation.jsx";
import styled from "@emotion/styled";
import { AccountContext } from "../../Context/AccountProvider.jsx";

const StyledDivider = styled(Divider)`
  margin: 5px 0 5px 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const UsersChat = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account, socket, activeUsers, setActiveUsers, newMessageFlag } = useContext(AccountContext);

    // to get all the users stored in DB or based on the search.
    useEffect(() => {
        const fetchData = async () => {
            try{
            const response = await getUsers();

            const filterData = response.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()) && user.name !== account.name); 
            setUsers(filterData);
            }catch(error){
                console.log("Could not connect to database");
            }
        };
        fetchData();
    }, [text, account, activeUsers, newMessageFlag]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])


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
