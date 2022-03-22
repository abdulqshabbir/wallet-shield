import React from "react"

function Expense({ expenseName, expenseAmount, expenseMax }) {
	var style
	var width = (expenseAmount / expenseMax * 100) + '%'
	if (expenseAmount < 0) {
		width = (Math.abs(expenseAmount) / expenseMax * 100) + '%'
		style = ["font-thick bg-red-200 ring-red-800", "bg-red-300 text-red-600"]
	} else if (expenseAmount === expenseMax) {
		style = ["font-thin bg-green-300 ring-green-800", "bg-green-200 text-gray-800"]
	} else if (expenseAmount >= expenseMax) {
		width = ((expenseAmount - expenseMax) / expenseMax * 100) + '%'
		style = ["font-thin bg-green-200 ring-green-900", "bg-green-300 text-gray-800"]
	} else {
		style = ["font-thin bg-yellow-200 ring-yellow-800", "bg-yellow-100 text-gray-800"]
	}

	return (
		<React.Fragment>
			<div className="expense xl:pl-56 xl:pr-10 grid grid-cols-2 py-3 justify-items-center">
				<p className="justify-self-center font-light">{expenseName}</p>
				<div className={style[0] + " w-5/6 rounded-md ring-1"}>
						<div style={{width: width}} className={style[1] + " py-1 pl-1 ring-1 rounded-md"}>
							${expenseAmount}/${expenseMax}
						</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Expense
