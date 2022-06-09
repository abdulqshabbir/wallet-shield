import jwt from "jwt-decode"
import refreshUser from "./refreshUser"

export function setTokensInLocalStorage(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
}

export function clearTokensFromLocalStorage() {
    localStorage.clear()
}

export async function getUserFromLocalStorage() {
    let refreshToken = localStorage.getItem("refreshToken")
    if (refreshToken === null) return null

    try {
        const res = await refreshUser()
        if (res.status === 200) {
            const { accessToken } = await res.json()
            setTokensInLocalStorage(accessToken, refreshToken)
            const jwtUser = jwt(refreshToken)
            return { email: jwtUser.email }
        } else {
            return null
        }
    } catch(e) {
        return null
    }
}

export function getBearerTokenFromLocalStorage() {
    let token = localStorage.getItem("accessToken")
    if (!token) {
        return ""
    } else {
        return `Bearer ${token}`
    }
}

export function getDefaultHeaders() {
    return {
        'Content-Type': 'application/json',
        'Authorization': getBearerTokenFromLocalStorage(),
    }
}