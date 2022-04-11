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
		</React.Fragment>
	)
}
