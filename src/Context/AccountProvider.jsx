import { createContext, useState } from "react";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
    const [account, setAccount ] = useState(null);
    const [person, setPerson] = useState(null);
    const [picture, setPicture] = useState(null);

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            picture,
            setPicture
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;