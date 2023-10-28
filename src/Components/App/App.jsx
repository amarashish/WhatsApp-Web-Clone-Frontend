import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "../Messanger/Messenger.jsx";
import AccountProvider from "../../Context/AccountProvider.jsx";
import { CLIENT_ID } from "../../Constants/constants.js";


function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
export default App;
