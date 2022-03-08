import React from "react";

function Expense({ expenseName, amount, max }) {
	const width = (amount / max * 100) + '%'
	return (
		<React.Fragment>
			<div className="expense xl:pl-56 xl:pr-10 grid grid-cols-2 py-3 justify-items-center">
				<p className="justify-self-center font-light">{expenseName}</p>
				<div className="w-5/6 font-thin bg-gray-200 rounded-md ring-1 ring-blue-800">
						<div style={{width: width}} className="w-1/3 h-full py-1 pl-1 ring-1 rounded-md bg-blue-300 text-gray-800">${amount}/${max}</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Expense;
