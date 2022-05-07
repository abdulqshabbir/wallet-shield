import { getDefaultHeaders } from "./auth"

export default async function createExpense(name, max, remaining, categoryId) {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            name,
            max,
            remaining,
            categoryId
        }),
        headers: getDefaultHeaders()
    }

    try {
        validateArguments(name, max, remaining, categoryId)
        let res = await fetch("/api/expenses", opts)
        let newExpense = await res.json()
        return newExpense
    } catch(e) {
        throw new Error(e.message) 
    }
}

function validateArguments(name, max, remaining, categoryId) {
    if (typeof name !== "string" || !isNaN(name)) {
        throw new Error("Expense name cannot be a number")
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