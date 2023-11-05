import { Typography } from '@mui/material'
import React from 'react'
import { LinearProgress } from "@mui/material";


function Loading() {
    return (
        <div style={{ height: "100vh", width: "100vw", background: "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <img src='https://i.postimg.cc/MKf8FrTR/loading.png' alt='' />
            <LinearProgress style={{ width: "24%", background: "#08a484", margin: "25px 0 15px 0" }} />
            <Typography style={{ color: "#rgb(116 122 124)" }}>Loading your chats</Typography>

        </div>
    )
}

export default Loading
