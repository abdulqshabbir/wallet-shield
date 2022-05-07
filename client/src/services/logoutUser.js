import { getDefaultHeaders } from "./auth"

export default async function logoutUser() {
    const opts = {
        method: "DELETE",
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken")
        }),
        headers: getDefaultHeaders()
    }

    try {
        let res = await fetch("/api/logout", opts)
        return res
    } catch(e) {
        throw new Error("Could not make request to server.")
    }

}