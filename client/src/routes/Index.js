/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Header"
import Footer from "../components/Footer"
import React, { useState } from "react"
import AssignMoney from "../components/AssignMoney"
import Expense from "../components/Expense"
import { useCategories } from '../contexts/Categories'
import { useExpenses } from '../contexts/Expenses'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function App(props) {
	return (
		<div className="min-w-content max-w-5xl mx-auto">
			{/* <Sidebar/> */}
			<div className="h-screen border-x-[1px]">
				<Header/>
				<AssignMoney />
				<Budget />
				<Footer/>
			</div>
		</div>
	)
}

function Budget() {
	const [categories, ] = useCategories()
	const [expenses, ] = useExpenses()
	return (
		<React.Fragment>
			<div className="h-14 px-4 flex flex-wrap justify-between items-center border-y-[1px] border-x-[1px]">
				<h3 className="text-base text-gray-500">CATEGORY</h3>
				<h3 className="text-base text-gray-500">AVAILABLE</h3>
			</div>	
			{categories.map(category =>
				<RenderExpensesWithinCategories
					key={Math.random()*1000}
					expenses={expenses.filter(expense => expense.categoryId === category.id)}
					categoryName={category.name}
					categoryId={category.id}
				/>)
			}
		</React.Fragment>
	)
}


function RenderExpensesWithinCategories({ categoryName, expenses, categoryId }) {
	const [ showExpenses, setShowExpenses ] = useState(true)

	let fontIcon
	if (showExpenses) {
		fontIcon = faAngleDown
	} else {
		fontIcon = faAngleRight
	}

	let Expenses
	if (showExpenses) {
		Expenses = expenses.map(e => <Expense key={e.id} expenseName={e.name} expenseAmount ={e.remaining} expenseMax={e.max} />)
	} else {
		Expenses = null
	}

    return (
        <React.Fragment>
			<div className="h-14 px-4 flex flex-wrap justify-between items-center bg-primaryGray-100 border-b-[1px] border-x-[1px]">
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
  
export default App
