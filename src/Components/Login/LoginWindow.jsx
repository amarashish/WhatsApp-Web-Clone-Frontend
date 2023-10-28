import { useGoogleLogin } from '@react-oauth/google';
import { Button } from "@mui/material";
import axios from "axios"
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider.jsx";
import { addUser } from "../../Service/api.js";

const LoginWindow = () => {

  const { setAccount } = useContext(AccountContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const data = await axios
          .get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          })
          .then(res => res.data);

          const userInfo = Object.assign({}, 
            { sub: data.sub, name: data.name, picture: data.picture, email: data.email, about: "Write something about yourself", phone: ""}
          );

        const user = await addUser(userInfo);
        // console.log("This is the updated user", user.data);

        if (user) {
          // If user is not undefined, set the account
          setAccount(user.data);
        } else {
          // If user is undefined, set the account with the original userInfo
          setAccount(userInfo);
        }
      } catch (error) {
        console.error("Error during login:", error.message);
      }
    },
  });


  return (
    <Button variant="contained" style={{ backgroundColor: "#00715c" }} className="login-window" onClick={googleLogin}>
      Sign In With Google
    </Button>
  );
};
export default LoginWindow;
