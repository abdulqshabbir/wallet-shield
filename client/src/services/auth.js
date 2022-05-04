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