import React, { useContext, useState } from "react";
import { AccountContext } from "../../Context/AccountProvider.jsx";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { addUser, addVerifier } from "../../Service/api";
import { auth } from "./firebase/firebaseAuth";
import { Dialog } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const PhoneSingIn = ({ click, setClick }) => {

    const { setAccount } = useContext(AccountContext);

    const [phone, setPhone] = useState("");
    const [user, setUser] = useState("");
    const [otp, setOtp] = useState("");

    const [display, setDisplay] = useState("none");

    const sendOtp = async () => {
        document.getElementById('11').innerHTML = "Otp Sent!";
        document.getElementById('11').style.background = "black";

        try {
            setDisplay("block");
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
            setUser(confirmation);

        } catch (error) {
            console.log(error.message);
        }
    }

    const verifyOtp = async () => {
        document.getElementById('13').innerHTML = "Verifying...";
        document.getElementById('13').style.background = "black";
        try {
            const response = await user.confirm(otp);
            const userInfo = {
                sub: phone,
                name: phone,
                picture: "https://i.postimg.cc/vmVXqpdj/blank-profile-picture-wp.png",
                email: "",
                about: "Write something about yourself",
                phone: phone,
            }

            const userFound = await addUser(userInfo);
            setAccount(userFound.data);

            await addVerifier({sub: userInfo.sub, authToken: response.user.accessToken});
            localStorage.setItem('authToken', response.user.accessToken);
       
        } catch (error) {
            console.log("Could not verfity Otp ", error.message);
        }
    }

    const changeHTML = () => {
        setClick(false);
    }

    return (
        <Dialog
            className="login-with-phone-window"
            open={click}
        >
            <CloseIcon id="15" onClick={changeHTML} style={{ alignSelf: "end", margin: "15px 20px 0 0", cursor: "pointer" }} />
            <div className="otp-send-verify-window">
                <div
                    style={{ display: "flex" }}>
                    <div>
                        <PhoneInput style={{ margin: "20px" }}
                            country={"in"}
                            value={phone}
                            onChange={(phone) => setPhone("+" + phone)}
                        />
                    </div>
                    <div>
                        <button id="11" onClick={sendOtp} className="send-verify-otp-btn">Send OTP</button>
                    </div>
                </div>
                <div style={{ marginLeft: "20px", display: "flex" }}>
                    <div id="recaptcha" />
                    <div className="captcha-verify-notice" style={{ display: display }}><span id="12">Verfity captcha to get otp</span></div>
                </div>
                <div style={{ display: "flex" }}>
                    <input onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter Otp" className="enter-phone-otp-field" />
                    <button onClick={verifyOtp} className="send-verify-otp-btn" id="13">Verify Otp</button>
                </div>
            </div>
        </Dialog>
    )
}
export default PhoneSingIn;