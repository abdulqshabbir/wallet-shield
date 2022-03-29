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
		<div>
			<Sidebar/>
			<div className="h-screen">
				<Header/>
				<AssignMoney />
				<main>
					<Budget />
				</main>
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
			expenses={expenses.filter(expense => expense.cId === category.cId)}
			categoryName={category.cName}
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
				expenses.map((e, i) => 
					<Expense
						key={e.Id}
						expenseName={e.eName}
						expenseAmount={e.spent}
						expenseMax={e.eMax} />
				)
			}
        </React.Fragment>
    )
}
  
export default App
