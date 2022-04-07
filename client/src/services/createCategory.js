export default function createCategory(name) {
    const opts = {
        method: "POST",
        body: JSON.stringify({name: name}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch("/api/categories", opts).then(data => data.json()).catch(e => console.log(e))
}