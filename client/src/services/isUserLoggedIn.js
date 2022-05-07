import { clearTokensFromLocalStorage, setTokensInLocalStorage } from "./auth"

export default async function isUserLoggedIn() {
    let refreshToken = localStorage.getItem("refreshToken")
    let opts = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${refreshToken}`
        },
        body: JSON.stringify({
            token: refreshToken
        })
    }
    try {
        let res = await fetch("/api/token", opts)
        if (res.status === 200) {
            let { accessToken } = await res.json() 
            setTokensInLocalStorage(accessToken, refreshToken)
            return true
        } else {
            clearTokensFromLocalStorage()
            return false
        }
    } catch(e){
        return false
    }
}