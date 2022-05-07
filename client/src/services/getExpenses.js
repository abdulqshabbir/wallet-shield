import { getBearerTokenFromLocalStorage } from "./auth"

export default function getExpenses() {
    let token = getBearerTokenFromLocalStorage()
    const opts = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    }

    return fetch("/api/expenses", opts)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            return null
        }
    })
    .catch(e => {
        console.log(e)
    })
}