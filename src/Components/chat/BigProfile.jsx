import { Box } from "@mui/material"
import styled from "@emotion/styled";
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useEffect, useState } from "react";
import { updateProfile } from "../../Service/api";
import { AccountContext } from "../../Context/AccountProvider";
import { ImageContext } from "../../Context/ImageProvider";
import { BASE_URL } from "../../Constants/constants";

const Logo = styled("img")({
  height: "200px",
  width: "200px",
  borderRadius: "50%"
});

const BigProfile = () => {

  const { account } = useContext(AccountContext);

  const { imageUrl,setImageUrl } = useContext(ImageContext)

  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const setProfile = async () => {

      const data = new FormData();
      data.append("file", profilePicture);

      const response = await updateProfile({ sub: account.sub, image: data });

      const URL = response.data.path; //get url for the updated profile
      setImageUrl(URL);
    }
    profilePicture && setProfile();
  }, [profilePicture, account, setImageUrl]);

  return (
    <Box
      style={{ textAlign: "center", padding: "20px 0", background:"rgb(240, 242, 245)"}}
    >
      <Logo
        src={imageUrl.includes("uploads") ? `${BASE_URL}/profile/${account.sub}` : imageUrl}
        alt=""
      />
      <Box >
        <label htmlFor="ProfileChange">
          <EditIcon
            className="upload-btn"
            style={{ position: "relative", left: "80px", bottom: "30px" }} />
        </label>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="ProfileChange"
          style={{ display: "none" }}
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </Box>
    </Box>
  )
}

export default BigProfile;