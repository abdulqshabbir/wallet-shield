import { getDefaultHeaders } from "./auth"

export default async function loginUser(email, password) {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: getDefaultHeaders()
    }

    try {
        let res = await fetch("/api/login", opts)
        return res
    } catch(e) {
        throw new Error("Could not make request to server.")
    }

}