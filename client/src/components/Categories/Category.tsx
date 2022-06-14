import React, { useState } from 'react'
import { useExpenses } from "../../contexts/Expenses"
import CategoryHeader from './CategoryHeader'
import AddExpenseField from './AddExpenseField'
import Expense from "./Expense"
import { ICategory } from '../../types/cateogry'
import { IExpense } from '../../types/expense'

interface IProps {
	category: ICategory	
}

export default function Category({ category }: IProps) {
	const [expenses, ] = useExpenses()
	const [renderAddExpenseField, setRenderAddExpenseField] = useState(false)

	return (
		<React.Fragment>
            <CategoryHeader category={category} setRenderAddExpenseField={setRenderAddExpenseField} />
			<AddExpenseField renderField={renderAddExpenseField} setRenderField={setRenderAddExpenseField} cId={category.id} />
			{
				expenses
					.filter((e: IExpense) => e.categoryId === category.id)
					.map((e: IExpense)=> <Expense key={e.id} expense={e} />)	
			}
		</React.Fragment>
	)

}