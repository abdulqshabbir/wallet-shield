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

    validateArguments(name, max, remaining, categoryId)
   
    return fetch("/api/expenses", opts)
        .then(data => data.json())
        .catch(e => console.log(e))
}

function validateArguments(name, max, remaining, categoryId) {
    if (typeof name !== "string") {
        throw new Error("Expense name must be a string")
    }
    else if (typeof max !== "number" || isNaN(max)) {
        throw new Error("Max budget for the month must be a number")
    }
    else if (typeof remaining !== "number" || isNaN(remaining)) {
        throw new Error("Max budget for the month must be a number")
    }
    else if (typeof categoryId !== "number" || isNaN(categoryId)) {
        throw new Error("Category ID must be a number")
    }
}