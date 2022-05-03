export default async function signupUser(email, password, confirmPassword) {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            confirmPassword
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        let res = await fetch("/api/signup", opts)
        return res
    } catch(e) {
        throw new Error("Could not make request to server.")
    }

}