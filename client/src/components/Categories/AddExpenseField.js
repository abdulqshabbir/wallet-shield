import React, { useState } from "react"
import createExpense from "../../services/createExpense"
import { useExpenses } from "../../contexts/Expenses"
import Spinner from "../Shared/Spinner"

export default function AddExpenseField({ render, setRender, cId }) {
	const [expenses, setExpenses] = useExpenses()
	const [name, setName] = useState("")
	const [max, setMax] = useState("")
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	function handleClose() {
		setRender(false)
	}

	function createNewExpense() {
		// validation requires strings be converted to numbers before
		// making a POST request
		setLoading(true)
		createExpense(name, parseFloat(max), parseFloat(max), cId)
			.then(newExpense => {
				setError(null)
				setRender(false)
				setName("")
				setMax("")
				setExpenses([...expenses, newExpense])
			})
			.catch(e => {
				setError(e.message)
			})
			.finally(() => {
				setLoading(false)
			})
	}
	if (render) {
		return(
			<React.Fragment>
				<div className="h-58 relative">
					<div className="h-58 w-80 absolute top-0 right-0 p-4 flex flex-col justify-center text-white z-10 bg-gray-500">
						<input
							value={name}
							placeholder="expense name"
							onChange={e => setName(e.target.value)}
							className="text-[16px] h-12 p-2 my-2 text-black" />
						<input
							value={max}
							placeholder="expense budget"
							onChange={e => setMax(e.target.value)}
							className="text-[16px] h-12 p-2 my-2 text-black" />
						<button
							onClick={createNewExpense}
							className="h-10 my-2 text-[16px] flex justify-center items-center bg-primaryBlue rounded-sm hover:bg-blue-300">
							{ loading ? <Spinner height={'1.8rem'} width={'1.8rem'} /> : "Create Expense " }
						</button>
						<button
							onClick={handleClose}
							className="h-10 my-2 text-[16px] bg-gray-400 rounded-sm hover:bg-gray-300">
								Cancel
							</button>
					</div>
				</div>
			</React.Fragment>
		)
	}
	return null
}