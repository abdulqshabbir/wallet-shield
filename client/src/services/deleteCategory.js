export default async function deleteCategory(id) {
    const opts = {
        method: "DELETE"
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