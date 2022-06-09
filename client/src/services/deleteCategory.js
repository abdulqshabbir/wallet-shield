import { getBearerTokenFromLocalStorage } from "./auth"

export default async function deleteCategory(id) {
    const opts = {
        method: "DELETE",
        headers: {
            'Authorization': getBearerTokenFromLocalStorage()
        }
    }
    try {
        let res = await fetch(`/api/categories/${id}`, opts)
        if (res.status === 200) {
            return true
        } else {
            let data = await res.json()
            return data.error
        }
    } catch(e) {
        throw new Error(e.message)
    }
}