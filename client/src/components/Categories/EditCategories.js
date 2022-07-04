import React, { useState } from 'react'
import { useExpenses } from "../../contexts/Expenses"
import CategoryHeader from './CategoryHeader'
import AddExpenseField from './AddExpenseField'
import Expense from "./Expense"

export default function Category({ category }) {
	const [expenses, ] = useExpenses()
	const [render, setRender] = useState(false)

	return (
		<React.Fragment>
            <CategoryHeader
				category={category}
				render={render}
				setRender={setRender}
			/>
			<AddExpenseField
				render={render}
				setRender={setRender}
				cId={category.id}
			/>
			<RenderExpenses cId={category.id} expenses={expenses} />
		</React.Fragment>
	)

}

function RenderExpenses({ cId, expenses }) {
	return expenses
	.filter(e => e.categoryId === cId)
	.map(e => <Expense key={e.id} expense={e} />)	
}