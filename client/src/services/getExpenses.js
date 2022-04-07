export default function getExpenses() {
    return fetch("/api/expenses")
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            return null
        }
    })
    .catch(e => console.log(e))
}