import React, { useState } from "react";

export default function Test() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [max, setMax] = useState('')

    function createNewExpense(e) {
        console.log(amount, max, name)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ expenseName: name, expenseAmount: Number(amount), expenseMax: Number(max) })
        };
        fetch("http://localhost:4000/expenses", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
			.then(expenses => window.location.reload(false))
            .catch(e => console.log(e))
    }

	return (
		<React.Fragment>
            <div className="xl:pl-56 xl:pr-10 grid grid-cols-2 justify-items-center pt-6 pb-3 gap-y-4">
                <label htmlFor="expenseName">Expense name: </label>
                <input type="text" name="expenseName" value={name} onChange={(e) => setName(e.target.value)} className="b border-2 bg-gray-100"/>

                <label htmlFor="expenseAmount">Expense amount: </label>
                <input type="text" name="expenseAmount" onChange={e => setAmount(e.target.value)} className="b border-2 bg-gray-100"/>

                <label htmlFor="expenseMax">Expense Max: </label>
                <input type="text" name="expenseMax" onChange={e => setMax(e.target.value)} className="b border-2 bg-gray-100"/>

                <button type="submit" className="bg-gray-100 p-4" onClick={e => createNewExpense(e)}>Submit</button>
            </div>
		</React.Fragment>
	)
}