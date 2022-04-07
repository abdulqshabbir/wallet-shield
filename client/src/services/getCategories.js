export default function getCategories() {
    return fetch("/api/categories")
    .then(data => data.json())
    .catch(e => console.log(e))
}