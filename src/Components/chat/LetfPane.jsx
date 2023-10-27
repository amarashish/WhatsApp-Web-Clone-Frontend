import { Box } from "@mui/material";
import LeftPaneHeader from "./LeftPainHeader";
import SearchArea from "./SearArea";
import UsersChat from "./UsersChat";
import { useState } from "react";

  const LeftPane = ()=>{   
    
    const [text, setText] = useState("");

    return (
        <Box className="left-pane">
          <LeftPaneHeader/>
          <SearchArea setText={setText}/>
          <UsersChat text={text}/>
        </Box>
    )
}

export default LeftPane;