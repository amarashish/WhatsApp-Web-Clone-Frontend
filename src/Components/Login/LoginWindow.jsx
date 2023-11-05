import { useGoogleLogin } from '@react-oauth/google';
import { Button } from "@mui/material";
import axios from "axios"
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider.jsx";
import { addUser, addVerifier } from "../../Service/api.js";

const LoginWindow = () => {

  const { setAccount, setIsLoading } = useContext(AccountContext);


  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        setIsLoading(true);
        const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },

        }).then(res => res.data);

        const userInfo = Object.assign({},
          { sub: data.sub, name: data.name, picture: data.picture, email: data.email, about: "Write something about yourself", phone: "" }
        );

        const user = await addUser(userInfo);
        setAccount(user.data);

        setIsLoading(false);

        const authToken = tokenResponse.access_token;
        await addVerifier({ sub: data.sub, authToken: authToken });
        localStorage.setItem('authToken', authToken);

      } catch (error) {
        console.error("Error during login:", error.message);
      }
    },
  });


  return (
    <Button variant="contained" style={{ backgroundColor: "#00715c", width: "200px" }} onClick={googleLogin}>
      Sign In With Google
    </Button>
  );
};
export default LoginWindow;
