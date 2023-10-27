import { Box } from "@mui/material"
import styled from "@emotion/styled";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { updateProfile } from "../../Service/api";


const Logo = styled("img")({
    height: "200px",
    width: "200px",
    borderRadius: "50%"
  });

const BigProfile = ({currentUser, account})=>{

  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const setProfile = async () => {

        const data = new FormData();
        data.append("file", profilePicture);
        
        const response = await updateProfile({sub: account.sub, image: data});
        const path = response.data.path;
        // console.log("This is current user", currentUser);
        console.log("this is path", path);
    }
    profilePicture && setProfile();
}, [profilePicture,account]);

    return (
        <Box
          style={{ textAlign: "center", padding: "20px 0" }}
        >
          <Logo
            src={currentUser.picture}
            alt="#"
          />
          <Box >
            <label htmlFor="fileInput">
              <EditIcon
                className="upload-btn"
                style={{ position: "relative", left: "80px", bottom: "30px" }} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e)=> setProfilePicture(e.target.files[0])}
            />
          </Box>
        </Box>
    )
}

export default BigProfile;