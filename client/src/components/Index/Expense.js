import React from "react"
import colors from "../../constants/colors"
import { useExpenses } from "../../contexts/Expenses"

function Expense({ id }) {
	const [ expenses, ] = useExpenses()
	const expense = expenses.find(e => e.id === id)
	return (
		<React.Fragment>
			<div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
				<div className="w-3/4">
					<h4 className="font-light mb-1">{expense.name}</h4>
					<ProgressBar
						remaining={expense.remaining}
						max={expense.max}
					/>
				</div>
				<span className="font-light text-gray-700">{expense.remaining} CAD</span>
			</div>
		</React.Fragment>
	)
}

function ProgressBar({ remaining, max}) {
	return (
		<div className="h-2 bg-primaryGray-200 border-gray-300 rounded">
			<div
				style={{
					width:calcProgressBarWidth(remaining, max),
					backgroundColor: calcProgressBarColor(remaining, max)
				}}
				className={`h-full rounded`}>
			</div>
		</div>
	)
}

function calcProgressBarWidth(remaining, max) {
	if (remaining <= 0) return "1%";
	return `${Math.floor(remaining/max * 100)}%`
}

function calcProgressBarColor(remaining, max) {
	let percentRemaining = Math.floor(remaining/max * 100)

	if (percentRemaining > 40) {
		return `${colors["bg-green-500"]}`
	} else if (percentRemaining > 15) {
		return `${colors["bg-yellow-500"]}`
	} else {
		return `${colors["bg-red-400"]}`
	}
}

export default Expense
