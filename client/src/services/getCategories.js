import { getBearerTokenFromLocalStorage } from "../services/auth"

export default function getCategories() {
    const opts = {
        method: "GET",
        headers: {
            'Authorization': getBearerTokenFromLocalStorage()
        }
    }
    return fetch("/api/categories", opts)
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            return null
        }
    })
    .catch(e => {
        throw new Error(e.message)
    })
}