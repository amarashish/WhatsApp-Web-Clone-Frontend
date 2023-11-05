import { createContext, useState, useRef, useEffect } from "react";

import { io } from "socket.io-client"

import { SOCKET_URL } from "../Constants/constants";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {


    const [account, setAccount] = useState(null);
    const [person, setPerson] = useState(null);
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const socket = useRef();

    useEffect(() => {
        socket.current = io(SOCKET_URL);
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag,
            isLoading,
            setIsLoading
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;