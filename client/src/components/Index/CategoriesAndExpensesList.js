import React from 'react'
import { useCategories } from '../../contexts/Categories'
import { useExpenses } from '../../contexts/Expenses'
import ExpenseListPerCategory from "./ExpenseListPerCategory"

export default function CategoriesAndExpensesList() {
	const [categories, ] = useCategories()
	const [expenses, ] = useExpenses()
	return (
		<React.Fragment>
			{categories.map(category =>
				<ExpenseListPerCategory
					key={category.id}
					expenses={expenses.filter(expense => expense.categoryId === category.id)}
					categoryName={category.name}
					categoryId={category.id}
				/>)
			}
			{/* div underneath is needed because footer is position-fixed and hides content at the end of the list */}
			<div className='w-full h-14'></div>
		</React.Fragment>
	)
}
