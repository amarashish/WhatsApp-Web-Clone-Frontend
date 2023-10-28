import { Box } from "@mui/material"
import styled from "@emotion/styled";
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useEffect, useState } from "react";
import { updateProfile } from "../../Service/api";
import { AccountContext } from "../../Context/AccountProvider";
import { BASE_URL } from "../../Constants/BaseUrl";

const Logo = styled("img")({
    height: "200px",
    width: "200px",
    borderRadius: "50%"
  });

const BigProfile = ({currentUser, setCurrentUser})=>{

  const {picture, setPicture} = useContext(AccountContext);

  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const setProfile = async () => {

        const data = new FormData();
        data.append("file", profilePicture);
        
        const response = await updateProfile({sub: currentUser.sub, image: data});
        const URL = response.data.path;

        setPicture(URL);
    }
    profilePicture && setProfile();
}, [profilePicture]);

    return (
        <Box
          style={{ textAlign: "center", padding: "20px 0" }}
        >
          <Logo
            src={picture ? `${BASE_URL}/profile/${currentUser.sub}` : currentUser.picture}
            alt=""
          />
          <Box >
            <label htmlFor="fileInput">
              <EditIcon
                className="upload-btn"
                style={{ position: "relative", left: "80px", bottom: "30px" }} />
            </label>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e)=> setProfilePicture(e.target.files[0])}
            />
          </Box>
        </Box>
    )
}

export default BigProfile;