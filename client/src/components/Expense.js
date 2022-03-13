import React from "react"

function Expense({ expenseName, expenseAmount, expenseMax }) {
	var style
	var width
	if (expenseAmount > expenseMax) {
		style = ["font-thick bg-red-200 ring-red-600", "bg-red-300 text-red-600"]
		width = ((expenseAmount - expenseMax ) / expenseMax * 100) + '%'
	} else {
		style = ["font-thin bg-blue-300 ring-blue-800", "bg-blue-200 text-gray-800"]
		width = (expenseAmount / expenseMax * 100) + '%'
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
