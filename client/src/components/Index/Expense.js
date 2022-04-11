import React from "react"

function Expense({ expenseName, expenseAmount, expenseMax }) {
	return (
		<React.Fragment>
			<div className="h-16 px-4 flex flex-wrap justify-between items-center border-b-[1px]">
				<div className="w-3/4">
					<h4 className="font-light mb-1">{expenseName}</h4>
					<ProgressBar name={expenseName} amount={expenseAmount} max={expenseMax} />
				</div>
				<span className="font-light text-gray-700">{expenseMax} CAD</span>
			</div>
		</React.Fragment>
	)
}

function ProgressBar({ name, amount, max }) {
	const percentageSpent = calcPercentageSpent(amount, max)
	return (
		<div className="h-2 bg-primaryGray-200 border-gray-300 rounded">
			<div className={`h-full w-[10%] bg-darkGreen rounded`}></div>
		</div>
	)
}

function calcPercentageSpent(amount, max) {
	return `${(amount/max).toFixed(0)}%`
}

export default Expense
