export default async function createCategory(name) {
    const opts = {
        method: "POST",
        body: JSON.stringify({name: name}),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        validateArguments(name)
        let res = await fetch("/api/categories", opts)
        let newCategory = await res.json()
        return newCategory
    } catch(e) {
        throw new Error(e.message)
    }
}

function validateArguments(name) {
    if (typeof name !== "string" || !isNaN(name)) {
        throw new Error("Category name must be non-numerical text")
    }
}