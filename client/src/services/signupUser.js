import { getDefaultHeaders } from "./auth"

export default async function signupUser(email, password, confirmPassword) {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            confirmPassword
        }),
        headers: getDefaultHeaders()
    }

    try {
        let res = await fetch("/api/signup", opts)
        return res
    } catch(e) {
        throw new Error("Could not make request to server.")
    }

}