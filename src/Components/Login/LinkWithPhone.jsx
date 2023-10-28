import { Typography } from "@mui/material"
import { useState } from "react";
import PhoneSingIn from "./PhoneSignIn";

const LinkWithPhone = () => {
  const [click, setClick] = useState(false);

  return (

    <div onClick={() => setClick(true)} style={{ margin: "50px 0 50px 0", width: "100%" }}>
      <Typography style={{ color: "green", cursor:"pointer"}}>
        Link with phone number
      </Typography>
        <PhoneSingIn click={click} setClick={setClick}/>
    </div>
  )
}

export default LinkWithPhone;