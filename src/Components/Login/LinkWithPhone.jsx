import { Typography } from "@mui/material"
import { useState } from "react";
import PhoneSingIn from "./PhoneSignIn";

const LinkWithPhone = () => {
  const [click, setClick] = useState(false);

  return (

    <div onClick={() => setClick(true)} 
    >
      <Typography style={{ color: "rgb(0, 113, 92)", cursor:"pointer", fontSize:"20px"}}>
        Link with phone number
      </Typography>
        <PhoneSingIn click={click} setClick={setClick}/>
    </div>
  )
}

export default LinkWithPhone;