
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import {formatDate} from "../../Utils/common-utils.jsx";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

const Sent = styled(Box)`
    background-color: #dcf8c6;
    max-width: 60%;
    margin: 3px 70px 3px auto;
    padding: 2px 5px; 
    width: fit-content;
    display: flex;
    border-radius: 10px;
    box-sizing: border-box;
    word-break: break-word;
`
const Received = styled(Box)`
    background-color: #ffffff;
    max-width: 60%;
    margin: 3px 0 3px 70px;
    padding: 2px 5px; 
    width: fit-content;
    display: flex;
    border-radius: 10px;
    box-sizing: border-box;
    word-break: break-word;
`

const Text = styled(Typography)`
    align-self: center;
    font-size: 14px;
    padding: 5px 8px 5px 5px;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`

const Time = styled(Typography)`
    margin-top: auto;
    font-size: 10px;
    color: #919191;
`

const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Sent>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Sent>
                :
                    <Received>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Received>

            }
        </>
    )
}

export default Message;