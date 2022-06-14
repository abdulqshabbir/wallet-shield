import React, { useState } from "react"
import createExpense from "../../services/createExpense"
import { useExpenses } from "../../contexts/Expenses"

export default function AddExpenseField({ renderField, setRenderField, cId }) {
	const [expenses, setExpenses] = useExpenses()
	const [name, setName] = useState("")
	const [max, setMax] = useState("")
	const [error, setError] = useState(null)

	function createNewExpense() {
		// validation requires strings be converted to numbers before
		// making a POST request
		createExpense(name, parseFloat(max), parseFloat(max), cId)
			.then(newExpense => {
				setError(null)
				setRenderField(false)
				setName("")
				setMax("")
				setExpenses([...expenses, newExpense])
			})
			.catch(e => {
				setError(e.message)
			})
	}
	if (renderField) {
		return(
			<div>
				<div className="h-12 my-4 mx-8 flex justify-between items-center">
					<label className="w-1/2" htmlFor="eName">Expense Name:</label>
					<input
						onChange={e => setName(e.target.value)}
						value={name}
						placeholder="Expense Name"
						className="w-1/2 h-10 p-2 border-2 border-gray-300 rounded-md" type="text" name="eName" id="eName"
					/>
				</div>
				<div className="h-12 my-2 mx-8 flex justify-between items-center">
					<label className="w-1/2" htmlFor="eMax">Monthly Budget:</label>
					<input
						onChange={e => setMax(e.target.value)}
						value={max}
						placeholder="Monthly Budget"
						className="w-1/2 h-10 p-2 border-2 border-gray-300 rounded-md" type="text" name="eMax" id="eMax"
					/>
				</div>
				<div className="text-red-500 text-center">
					{error}
				</div>
				<div className="flex justify-center items-center">
					<button onClick={createNewExpense} className="h-12 mx-8 mb-4 w-full border-2 border-blue-400 bg-blue-200 rounded hover:bg-blue-400" >Save</button>
				</div>
			</div>
		)
	}
	return null
}