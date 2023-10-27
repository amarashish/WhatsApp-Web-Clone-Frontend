import EmptyChat from "./EmptyChat"
import ChatBox from "./ChatBox"
import { Box } from "@mui/material"
import { AccountContext } from "../../Context/AccountProvider"
import { useContext } from "react"

const RightPane = () => {
    const { person } = useContext(AccountContext);

    return (
        <Box className='right-pane'>
            {
                person ? <ChatBox /> : <EmptyChat />
            }
        </Box>
    )
}
export default RightPane;