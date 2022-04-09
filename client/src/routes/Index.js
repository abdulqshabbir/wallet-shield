/* Tailwind only works properly for .js files not .jsx */
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
import AssignMoney from "../components/AssignMoney"
import Expense from "../components/Expense"
import { useCategories } from '../contexts/Categories'
import { useExpenses } from '../contexts/Expenses'

function App(props) {
	return (
		<div className="min-w-content max-w-5xl mx-auto">
			{/* <Sidebar/> */}
			<div className="h-screen">
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
	return categories.map(category =>
		<RenderExpensesWithinCategories
			key={Math.random()*1000}
			expenses={expenses.filter(expense => expense.categoryId === category.id)}
			categoryName={category.name}
		/>)
}


function RenderExpensesWithinCategories({ categoryName, expenses }) {
    return (
        <React.Fragment>
			<div className="expense-category xl:pl-56 xl:pr-10 grid grid-cols-2 justify-items-center pt-6 pb-3 gap-y-4">
				<h2 className="font-semibold">{categoryName}</h2>
				<h2 className="font-semibold">Amount Spent</h2>
			</div>
			{
				expenses.map((e) => 
					<Expense
						key={e.id}
						expenseName={e.name}
						expenseAmount={e.remaining}
						expenseMax={e.max} />
				)
			}
        </React.Fragment>
    )
}
  
export default App
