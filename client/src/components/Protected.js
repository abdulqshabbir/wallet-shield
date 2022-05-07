import { Navigate } from "react-router-dom"
import { useUser } from "./../contexts/User"

export default function Protected({ children }) {
    const [ user, ] = useUser()
    if (!user) {
        return <Navigate to="/login" replace />
    } else {
        return children
    }
}