export function setUserInLocalStorage(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
}

export function getUserFromLocalStorage() {
    let refreshToken = localStorage.getItem("refreshToken")

    if (refreshToken === null) return null

    return refresh
}