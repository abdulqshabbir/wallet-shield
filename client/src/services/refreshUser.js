import { getDefaultHeaders } from "./auth";

export default async function refreshUser() {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken")
        }),
        headers: getDefaultHeaders()
    }
    try {
        const res = await fetch("/api/token", opts)
        return res
    } catch(e) {
        throw new Error(e.message)
    }
}