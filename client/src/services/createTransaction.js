export default async function createTransaction(amount, isOutflow, expenseId, repeat, memo, date) {
    const opts = {
        method: "POST",
        body: JSON.stringify({
            amount,
            isOutflow,
            expenseId,
            repeat,
            memo: memo ? memo : null,
            date
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        validateArguments(amount, isOutflow, expenseId)
        let res = await fetch("/api/transactions", opts)
        let newTransaction = await res.json()
        return newTransaction
    } catch(e) {
        throw new Error(e) 
    }
}

function validateArguments(amount, isOutflow, expenseId) {
    if (isNaN(amount) || amount < 0) {
        throw new Error("Amount needs to be a numerical value")
    }
    if (typeof isOutflow !== 'boolean') {
        throw new Error("The outflow needs to be a boolean value")
    }
    if (isNaN(expenseId)) {
        throw new Error("Expense id needs to be a numerical value")
    }
}