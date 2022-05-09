import React, {useEffect, useState} from 'react'
import { useCategories } from '../../contexts/Categories'
import { useExpenses } from '../../contexts/Expenses'
import { Bars, MutatingDots } from 'react-loader-spinner'
import ExpenseListPerCategory from "./ExpenseListPerCategory"

export default function CategoriesAndExpensesList() {
	const [categories, ] = useCategories()
	const [expenses, ] = useExpenses()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 300)
	}, [])
	if ( loading) {
		return (
			<div className='h-[60vh] flex justify-center items-center'>
				<MutatingDots heigth="100" width="100" color="grey" ariaLabel="loading-indicator" />
			</div>
		)
	} else {
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
}
