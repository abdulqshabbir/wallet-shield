import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Expense from "./Expense"

export default function ExpenseListPerCategory({ categoryName, expenses, categoryId }) {
	const [ showExpenses, setShowExpenses ] = useState(true)

	let fontIcon
	if (showExpenses) {
		fontIcon = faAngleDown
	} else {
		fontIcon = faAngleRight
	}

	let Expenses
	if (showExpenses) {
		Expenses = expenses.map(e =>
			<Expense
				key = {e.id}
				expenseName = {e.name}
				expenseAmount = {e.remaining}
				expenseMax={e.max}
			/>)
	} else {
		Expenses = null
	}

    return (
        <React.Fragment>
			<div className="h-14 px-4 flex flex-wrap justify-between items-center bg-primaryGray-100 border-b-[1px]">
				<div onClick={() => setShowExpenses(!showExpenses)} className="text-normal font-semibold flex justify-center items-center hover:cursor-pointer">
					<FontAwesomeIcon
						className="hover:cursor-pointer hover:scale-125"
						icon={fontIcon}
					/>
					<p className="ml-2">{categoryName}</p>
				</div>
				<h2 className="font-light text-gray-700">{`${totalRemainingInCategory(categoryId, expenses)} CAD`}</h2>
			</div>
			{ Expenses }
        </React.Fragment>
    )
}

function totalRemainingInCategory(id, expenses) {
	return expenses
		.filter(expense => expense.categoryId === id)
		.reduce((acc, e) => acc + e.remaining, 0)
}