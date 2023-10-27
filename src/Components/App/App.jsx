import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "../Messanger/Messenger.jsx";
import AccountProvider from "../../Context/AccountProvider.jsx";
// import dotenv from "dotenv";

// dotenv.config();



// const CLIENT_ID = "44997187521-4olmb8kn69m5kjkem0601a30gujnr1t5.apps.googleusercontent.com"; // for deployed app

const CLIENT_ID = "524555797423-pcanblu57rvdgdcvetc583rm42sulhcf.apps.googleusercontent.com"; // for loal host


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
