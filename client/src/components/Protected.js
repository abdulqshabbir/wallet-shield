import { Navigate } from "react-router-dom"
import { useUser } from "./../contexts/User"
import Spinner from "./Spinner"

export default function Protected({ children }) {
    const [ user, ] = useUser()
    if (user === 'loading') {
        return <Spinner />
    }
    else if (!user) {
        return <Navigate to="/login" replace />
    } else {
        return children
    }
}