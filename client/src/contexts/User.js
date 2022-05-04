import React, { useEffect, useState } from "react"
import { getUserFromLocalStorage } from "../services/auth"

const User = React.createContext()

export function useUser() {
    return React.useContext(User)
}

export default function UserProvider({ children }) {
    const [ user, setUser ] = useState(getUserFromLocalStorage())

    return(
        <User.Provider value={[user, setUser]}>
            {children}
        </User.Provider>
    )
}
