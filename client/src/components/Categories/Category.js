import React, { useState } from 'react'
import { useExpenses } from "../../contexts/Expenses"
import CategoryHeader from './CategoryHeader'
import AddExpenseField from './AddExpenseField'
import Expense from "./Expense"

export default function Category({ category }) {
	const [expenses, ] = useExpenses()
	const [renderAddExpenseField, setRenderAddExpenseField] = useState(false)

	return (
		<React.Fragment>
            <CategoryHeader category={category} setRenderAddExpenseField={setRenderAddExpenseField} />
			<AddExpenseField renderField={renderAddExpenseField} setRenderField={setRenderAddExpenseField} cId={category.id} />
			<RenderExpenses cId={category.id} expenses={expenses} />
		</React.Fragment>
	)

}

function RenderExpenses({ cId, expenses }) {
	return expenses
	.filter(e => e.categoryId === cId)
	.map(e => <Expense key={e.id} expense={e} />)	
}