import { Navigate } from "react-router-dom"
import { getUserFromLocalStorage } from "../services/auth"

export default function Protected({ children }) {
    const user = getUserFromLocalStorage()

    if (user === null) {
        return <Navigate to="/login" replace />
    }

    return children
}