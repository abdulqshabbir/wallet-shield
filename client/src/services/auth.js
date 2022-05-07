import jwt from "jwt-decode"

export function setTokensInLocalStorage(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
}

export function clearTokensFromLocalStorage() {
    localStorage.clear()
}

export function getUserFromLocalStorage() {
    let refreshToken = localStorage.getItem("refreshToken")

    if (refreshToken === null) return null

    let user = jwt(refreshToken)
    return { email: user.email }
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