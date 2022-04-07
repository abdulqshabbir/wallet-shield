export default function createExpense(name, max, remaining, categoryId) {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            name,
            max,
            remaining,
            categoryId
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch("/api/expenses", opts).then(data => data.json()).catch(e => console.log(e))
}